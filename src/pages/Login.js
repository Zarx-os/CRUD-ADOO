import "../styles/styles.css"
import { useState } from "react";
import axios from "axios";
import { Switch, useHistory,Route } from "react-router";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
export default function Login(props){

    let history=useHistory();

    const [datos,setDatos]=useState({user:'',pass:''});
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Login';
        axios.get(url+`?user=${datos.user}&pass=${datos.pass}`).then((response) => {
            //console.log(response.data);
            if(response.data==true) {ReactDOM.render(
            <Router>
              {history.push("/2CM13ID3IDT7/App")}
              <Switch>
                <Route exact path="/2CM13ID3IDT7/App"><App/></Route>
              </Switch>
            </Router>
            ,document.getElementById("root"))}
            else window.alert("No pudo iniciar sesión");
          }, (error) => {
            console.log(error);
          });
        }
      
      const handleChange = (e) => {
        const { name, value } = e.target
        setDatos({...datos, [name]: value })
      }

    return(
        <div className="inicio">
        <form onSubmit={handleSubmit}>
            <h1>Bienvenido</h1><br/><br/>
            <label>Usuario</label><br/>
            <input type="text" name="user" onChange={handleChange}/><br/><br/><br/>
            <label>Password</label><br/>
            <input type="password" name="pass" onChange={handleChange}/><br/><br/><br/><br/>
            <button type="submit">Entrar</button>
        </form>
        </div>
    );


}

