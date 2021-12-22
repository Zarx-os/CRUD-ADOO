
import {  useState ,useEffect } from "react";
import "../styles/crear.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Visualizar (props){
    let count=1;
    let history=useHistory();
    const [datos,setDatos]=useState({
            data2: [],
            showAlert2: false,
            alertText2: "",
            id:props.id,
            pregunta:"",
            respuesta:"",
            drag1:"",
            drag2:"",
            drag3:"",
            drag4:"",
            target1:"",
            target2:"",
            target3:"",
            target4:"",
        })

        useEffect(() => {
            const url="/2CM13ID3IDT7/imagenes/"
            axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response2 => {
            setDatos({ data2: response2.data});
            response2.data.map(e=>{
                if(datos.id==e["id"]){
                    setDatos({pregunta:e["pregunta"],respuesta:e["respuesta"],drag1:e["drag1"],drag2:e["drag2"],
                    drag3:e["drag3"],drag4:e["drag4"],target1:url+e["target1"],target2:url+e["target2"]
                    ,target3:url+e["target3"],target4:url+e["target4"]});
                }
            })
        }).catch(error2 => {
            console.info(error2);
            setDatos({ showAlert2: true, alertText2: "ERROR EN LA OBTENCION DE DATOS" });
        })
        },[count])
        


  const d=()=>{
      history.goBack();
    }   

        return(
        <>
        <div className="imagen"></div>
        <div className="Crear">
            <h1>Pregunta No.{props.id}</h1>
            <p><b>Pregunta:</b></p><hr/>
            <p>{datos.pregunta}</p>
            <p><b>Respuesta:</b></p><hr/>
            <p>{datos.respuesta}</p>
            <br/>
            <h1>Drag and Drop</h1>
            <span>Drag1: {datos.drag1}</span>
            <img id="target1" src={datos.target1}/>

            <hr/>
            <span>Drag2: {datos.drag2}</span>
            <img id="target2" src={datos.target2}/>

            <hr/>
            <span>Drag3: {datos.drag3}</span>
            <img id="target3" src={datos.target3}/>

            <hr/>
            <span>Drag4: {datos.drag4}</span>
            <img id="target4" src={datos.target4}/>
            <button id="botonRegresar" onClick={d}>Regresar</button>
            </div>
        </>  
        );
}


