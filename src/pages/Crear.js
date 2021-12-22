
import { useState } from "react";
import axios from "axios";
import "../styles/crear.css"
import { useHistory } from "react-router";
export default function Crear({id}){

    let history=useHistory();

    const [datos,setDatos]=useState({
        id:id,
        pregunta:'',
        respuesta:''
    });
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);

    const [dragDatos,setDrag]=useState({
      drag1:'',
      drag2:'',
      drag3:'',
      drag4:''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Crear';/*
        axios.get(url+`?id=${datos.id}&pregunta=${datos.pregunta}&respuesta=${datos.respuesta}`).then((response) => {
            console.log(response);
            if(response.status=="200"){ 
                window.location.replace("/2CM13ID3IDT7/#/App");
            }
          }, (error) => {
            console.log(error);
          });*/
        const params={
            id:datos.id,
            pregunta:datos.pregunta,
            respuesta:datos.respuesta,
            drag1:dragDatos.drag1,
            drag2:dragDatos.drag2,
            drag3:dragDatos.drag3,
            drag4:dragDatos.drag4
        }
        const formdata=new FormData();

        formdata.append("id",params.id);
        formdata.append("pregunta",params.pregunta);
        formdata.append("respuesta",params.respuesta);
        formdata.append("drag1",params.drag1);
        formdata.append("drag2",params.drag2);
        formdata.append("drag3",params.drag3);
        formdata.append("drag4",params.drag4);
        formdata.append("file1",selectedFile1);
        formdata.append("file2",selectedFile2);
        formdata.append("file3",selectedFile3);
        formdata.append("file4",selectedFile4);
          axios.post(url,formdata).then((response) => {
            console.log(response);
            if(response.status=="200"){ 
                window.location.replace("/2CM13ID3IDT7/#/App");
            }
          }, (error) => {
            console.log(error);
          })

      };

    const handleChange = (e) => {
        const { name, value } = e.target
        setDatos({...datos, [name]: value })
      }

      const handleDrags = (e) => {
        const { name, value } = e.target
        setDrag({...dragDatos, [name]: value })
      }

      const funcion1=(event)=>{

        const output=document.getElementById("output");
        const status=document.getElementById("status");
        output.src = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }

          setSelectedFile1(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
      }

      const funcion2=(event)=>{

        const output2=document.getElementById("output2");
        const status=document.getElementById("status");
        output2.src = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }

          setSelectedFile2(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output2.src = event.target.result;
          });
          reader.readAsDataURL(file);
      }
      const funcion3=(event)=>{

        const output=document.getElementById("output3");
        output.src = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }

          setSelectedFile3(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
      }
      const funcion4=(event)=>{

        const output=document.getElementById("output4");
        output.src = '';
          const file = event.target.files[0];
          if (!file.type) {
            status.textContent = 'Error: The File.type property does not appear to be supported on this browser.';
            return;
          }
          if (!file.type.match('image.*')) {
            status.textContent = 'Error: The selected file does not appear to be an image.'
            return;
          }

          setSelectedFile4(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
      }


    return(
        <>
        
        <div className="imagen"></div>
        <div className="Crear">
        <img className="equis" onClick={()=>history.goBack()} src="https://images.vexels.com/media/users/3/155299/isolated/lists/1988d1faba4d059eb4461d955af5cf61-x-marca-garabato.png"/>
            <h1>Crear una nueva pregunta</h1>
            <form onSubmit={handleSubmit} enctype="multipart/form-data" >
                <label>{"No.Pregunta "+ datos.id}</label><hr/>
                <label>Pregunta</label>
                <input type="text" name="pregunta" onChange={handleChange} required/>
                <label>Respuesta</label>
                <input type="text" name="respuesta" onChange={handleChange} required/>
                <hr/>
                <p id="status"></p>
                <input type = "file" name = "file1" accept="image/png, image/jpeg"  onChange={(e)=>funcion1(e)} required />
                <div><img id="output"/></div>
                <input type="text" name="drag1" onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file2" accept="image/png, image/jpeg"  onChange={(e)=>funcion2(e)} required />
                <div><img id="output2"/></div>
                <input type="text" name="drag2" onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file3" accept="image/png, image/jpeg"  onChange={(e)=>funcion3(e)} required />
                <div><img id="output3"/></div>
                <input type="text" name="drag3" onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file4" accept="image/png, image/jpeg"  onChange={(e)=>funcion4(e)} required />
                <div><img id="output4"/></div>
                <input type="text" name="drag4" onChange={handleDrags} required/>
                <br/>
                <button type="submit"  className="boton">Enviar</button>
            </form>
        </div>
        </>
    );
    
}