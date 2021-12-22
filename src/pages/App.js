import axios from 'axios';
import Pregunta from "../componets/Pregunta"; 
import Tap from "../componets/Tap"
import "../styles/styles.css";
import { useState ,useEffect } from "react";

export default function App(){

    const[datos,setDatos]=useState({
    data: [],
    showAlert: false,
    alertText: "",
    numero:"0",
    log:false,
    user:''});

    
useEffect(() => {
    axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response=>{
      setDatos({...datos,data:response.data,user:localStorage.getItem('user')})}
      )
    .catch(error=>{
      console.info(error);
        setDatos({...datos,showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
    })

    },[]);


    const sacar=()=>{
      localStorage.removeItem('user');
      localStorage.removeItem('auth');
      window.location.reload();  
    }
  return (
  <>

    {datos.data.map((e)=>{
      datos.numero==0?setDatos({...datos,numero:1}):console.log(".");
      datos.numero<e["id"]?setDatos({...datos,numero:parseInt(e["id"])+1}):console.log("#####")
    })}
    <div className='usuario'>
      <span>Bienvenido {datos.user}</span>
      <button className='salirUsuario' onClick={sacar}>Salir</button>
    </div>
    <h1>CRUD preguntas</h1>
    <Tap id={`${datos.numero}`}  ruta="/crear" contenido="Crear"/>
    <table className="container">
      <thead>
      <tr>
      <th>Ejercicios</th>
      <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      {
           datos.data.map(pregunta => {
           return <Pregunta {...pregunta} />})
      }
      </tbody>
    </table>
    </>);
  
}
