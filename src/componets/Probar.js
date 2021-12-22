import { useState,useEffect} from "react";
import "../styles/styles.css"
import axios from "axios";
import { BrowserRouter as Router, Switch,Route, Link } from "react-router-dom";
import { DragDropContext,Droppable,Draggable } from "react-beautiful-dnd";
import { remove, result } from "lodash";

const Probar=()=>{

    
    const[datos,setDatos]=useState({
        data: [],
        showAlert: false,
        alertText: "",
        numero:"0"
    });
    
    useEffect(() => {
        axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response=>{
          setDatos({...datos,data:response.data})}
          )
        .catch(error=>{
          console.info(error);
            setDatos({...datos,showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
        })
    
        },[]);

    return(
        <>
        <h1>Ejercicios</h1>
        <div id="espacio">
            <table className="styled-table">
                <thead>
                <tr>
                <th>Ejercicios</th>
                <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    datos.data.map(ejercicio => { 
                        return <Ejercicio {...ejercicio} />
                    })
                }
                </tbody>
            </table>
        </div>
        </>
    )

}
export default Probar;

const Ejercicio=(props)=>{
    return(
        <Router>
        <tr>
        <td>Ejercicio {props.id}</td>
            <td>
                 <button className="botonProbar"><Link to="/2CM13ID3IDT7/resolver">Resolver</Link></button>
            </td>
        </tr>

        <Switch>
            <Route exact path="/2CM13ID3IDT7/resolver" > <Resolver {...props}/></Route>
        </Switch>
        </Router>
    );

}



const Resolver=(props)=>{

    const url="/2CM13ID3IDT7/imagenes/"


    const initialTargerts=[{
        id:0,
        target:url+String(props.target1)
    },{
        id:1,
        target:url+String(props.target2)
    },{
        id:2,
        target:url+String(props.target3)
    },{
        id:3,
        target:url+String(props.target4)
    }];


    const[targets,setTargets]=useState(initialTargerts);
    const[datosUsu,setDatoU]=useState(
        {
            pregunta:'',
            respuesta:''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        setDatoU({...datos, [name]: value })
    }




    return(
    <>
     <div className="imagen2"/>
        <div className="resolver">
        <h1>Pregunta No.{props.id}</h1>
        <span>{props.pregunta}</span>
        <input input type="text" name="respuesta" onChange={handleChange} required/>
        <h1>Drag and Drop</h1>
        <DragDropContext 
        onDragEnd={({source,destination}) => {
            if(source.droppableId!=destination.droppableId){
                let img=document.querySelector("#"+String(destination.droppableId));
                img.src=String(initialTargerts[source.index].target);
        }
        if(source.droppableId!=destination.droppableId){
            return;
        }
    }}>
        <div className="contenedorDrag">
        <Droppable droppableId="task1" direction="horizontal">
        {(droppableProvided)=>(
        <div {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
            {targets.map((e,index)=>(
                <Draggable key={index} draggableId={e.target} index={index}>
                    {(draggableProvided)=>(
                    
                        <img {...draggableProvided.draggableProps} 
                        ref={draggableProvided.innerRef} 
                    {...draggableProvided.dragHandleProps}
                     className="targetPregunta" src={e.target}/>)}
                </Draggable>
            ))}
            {droppableProvided.placeholder}
        </div >)}
        </Droppable>
        </div>
        

        <div className="contenedorDrop">
        <Droppable droppableId="imagenDrag0">
        {(droppableProvided)=>(<div className="contene" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}><span>{props.drag1}
        <img className="target" id="imagenDrag0"/>
        </span></div>)}
        </Droppable>
        <Droppable droppableId="imagenDrag1">
        {(droppableProvided)=>(<div className="contene" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}><span>{props.drag2}
        <img className="target" id="imagenDrag1"/></span></div>)}
        </Droppable>
        <Droppable droppableId="imagenDrag2">
        {(droppableProvided)=>(<div className="contene" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}><span>{props.drag3}
        <img className="target" id="imagenDrag2"/></span></div>)}
        </Droppable>
        <Droppable droppableId="imagenDrag3">
        {(droppableProvided)=>(<div className="contene" {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}><span>{props.drag4}
        <img className="target" id="imagenDrag3"/></span></div>)}
        </Droppable>
        </div>
        </DragDropContext>
    </div>
    <button className="botonterminar" onClick={()=>window.location.replace("/2CM13ID3IDT7/#/probar")}>Terminar</button>
    </>
    )

}