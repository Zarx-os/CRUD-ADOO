import { Component} from 'react';
import axios from 'axios';
import Pregunta from "../componets/Pregunta"; 
import Tap from "../componets/Tap"
import "../styles/styles.css";


export default class App extends Component{
    state = {
    data: [],
    showAlert: false,
    alertText: "",
    numero:0,
    log:false,
    user:'',
    password:''
}

componentDidMount() {
    axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response => {
        this.setState({ data: response.data});
    }).catch(error => {
        console.info(error);
        this.setState({ showAlert: true, alertText: "ERROR EN LA OBTENCION DE DATOS" });
    })
    }

  render(){
    const {data,showAlert,alertText,numero,log,user,password}=this.state;    
    data.map(e=>{
      if(numero<e["id"])
        this.setState({numero:parseInt(e["id"])+1});
    })
  return(
    <>
    <h1>CRUD preguntas</h1>
    <Tap id={numero}ruta="/2CM13ID3IDT7/App/crear" contenido="Crear"/>
    <table className="container">
      <thead>
      <tr>
      <th>Ejercicios</th>
      <th>Acciones</th>
      </tr>
      </thead>
      <tbody>
      {
          data.map(pregunta => {
            return <Pregunta {...pregunta} />
          })
      }
      </tbody>
    </table>
    </>
  );
  }
}