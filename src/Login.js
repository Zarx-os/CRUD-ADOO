import "./styles/styles.css"
import { useState } from "react";
export default function Login(props){


    const [datos,setDatos]=useState({
        user:'',
        pass:''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Login';
        axios.get(url+`?user=${datos.user}&pass=${datos.pass}`).then((response) => {
            console.log(response);
            if(response.status=="200") window.location.href="/2CM13ID3IDT7";
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
            <label>Usuario</label><br/>
            <input type="text" name="user" onChange={handleChange}/>
            <label>Password</label><br/>
            <input type="password" name="pass" onChange={handleChange}/>
        </form>
        </div>
    );


}

