
import { Component } from "react";
import "../styles/crear.css";
import axios from "axios";
export default class Visualizar extends Component{
    

    constructor(props) {

        super(props);
        this.state = {
            data2: [],
            showAlert2: false,
            alertText2: "",
            id:props.id,
            pregunta:"",
            respuesta:""
        }
    }    

    componentDidMount() {
        axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response2 => {
            this.setState({ data2: response2.data});
            this.state.data2.map(e=>{
                if(this.state.id==e["id"]){
                    this.setState({pregunta:e["pregunta"],respuesta:e["respuesta"]});
                }
            })
        }).catch(error2 => {
            console.info(error2);
            this.setState({ showAlert2: true, alertText2: "ERROR EN LA OBTENCION DE DATOS" });
        })
    }
    
    
    render(){
        const {data2,showAlert2,alertText2,id,pregunta,respuesta}=this.state;
        return(<>
        <div className="imagen"></div>
        <div className="Crear">
            <h1>Pregunta No.{id}</h1>
            <p><b>Pregunta:</b></p><hr/>
            <p>{pregunta}</p>
            <p><b>Respuesta:</b></p><hr/>
            <p>{respuesta}</p>
            <button className="boton" onClick={()=>window.location.assign("/2CM13ID3IDT7")}>Regresar</button>
        
            </div>
        </>  
        );
}
}
