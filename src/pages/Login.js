import "../styles/styles.css"
import { useState } from "react";
import axios from "axios";
import { Switch, useHistory,Route, HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

export default function Login(props){

    let history=useHistory();

    const [datos,setDatos]=useState({user:'',pass:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Login';
        axios.get(url+`?user=${datos.user}&pass=${datos.pass}`).then((response) => {
            if(response.data==true) {
              localStorage.setItem('auth',true);
              localStorage.setItem('user',datos.user);
              ReactDOM.render(
            <HashRouter>
              {history.push("/App")}
              <Switch>
                <Route exact path="/App"><App/></Route>
              </Switch>
            </HashRouter>
            ,document.getElementById("root"))}
            else window.alert("El usuario o la contraseña que ingresaste no estan registrados");
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

