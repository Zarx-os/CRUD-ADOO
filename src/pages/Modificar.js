import { useHistory } from "react-router";
import axios from "axios";
import "../styles/modificar.css"
import { useState,useEffect } from "react";
import { defaultProps } from "react-latex";

export default function Modificar({id}){
    let history=useHistory();
    const [datos,setDatos]=useState({
        id:id,
        pregunta:'',
        respuesta:''
    });

    const [dragDatos,setDrag]=useState({
        drag1:'',
        drag2:'',
        drag3:'',
        drag4:''
      })
      const [targetDatos,setTarget]=useState({
        target1:'',
        target2:'',
        target3:'',
        target4:''
      })

      const url="/2CM13ID3IDT7/imagenes/";
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);

    useEffect(() => {
        
        axios.get("http://localhost:8080/2CM13ID3IDT7/Preguntas").then(response2 => {
        response2.data.map(e=>{
            if(datos.id==e["id"]){
                setDatos({...datos,pregunta:e["pregunta"],respuesta:e["respuesta"]});
                setDrag({drag1:e["drag1"],drag2:e["drag2"],drag3:e["drag3"],drag4:e["drag4"]});
                setTarget({target1:e["target1"],target2:e["target2"],target3:e["target3"],target4:e["target4"]});
            }

        })
    }).catch(error2 => {
        console.info(error2);
        setDatos({ showAlert2: true, alertText2: "ERROR EN LA OBTENCION DE DATOS" });
    })
    },[])


    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '/2CM13ID3IDT7/Modificar';
        
        const params={
            id:datos.id,
            pregunta:datos.pregunta,
            respuesta:datos.respuesta,
            drag1:dragDatos.drag1,
            drag2:dragDatos.drag2,
            drag3:dragDatos.drag3,
            drag4:dragDatos.drag4,
            target1:targetDatos.target1,
            target2:targetDatos.target2,
            target3:targetDatos.target3,
            target4:targetDatos.target4
        }
        const formdata=new FormData();

        formdata.append("id",params.id);
        formdata.append("pregunta",params.pregunta);
        formdata.append("respuesta",params.respuesta);
        formdata.append("drag1",params.drag1);
        formdata.append("drag2",params.drag2);
        formdata.append("drag3",params.drag3);
        formdata.append("drag4",params.drag4);
        formdata.append("target1",params.target1);
        formdata.append("target2",params.target2);
        formdata.append("target3",params.target3);
        formdata.append("target4",params.target4);
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

          setSelectedFile3(event.target.files[0]);
          const reader = new FileReader();
          reader.addEventListener('load', event => {
            output.src = event.target.result;
          });
          reader.readAsDataURL(file);
      }
      const funcion4=(event)=>{

        const output=document.getElementById("output4");
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
        <div className="Modificar">
        <img className="equis" onClick={()=>history.goBack()} src="https://images.vexels.com/media/users/3/155299/isolated/lists/1988d1faba4d059eb4461d955af5cf61-x-marca-garabato.png"/>
            <h1>Modificar pregunta</h1>
            <form onSubmit={handleSubmit} enctype="multipart/form-data" >
                <label>{"No.Pregunta "+ datos.id}</label><hr/>
                <label>Pregunta</label>
                <input type="text" id="pregunta" name="pregunta" value={datos.pregunta} onChange={handleChange} required/>
                <label>Respuesta</label>
                <input type="text" id="respuesta" name="respuesta" value={datos.respuesta} onChange={handleChange} required/>
                <hr/>
                <p id="status"></p>
                <input type = "file" name = "file1" accept="image/png, image/jpeg"  onChange={(e)=>funcion1(e)} required />
                <div><img id="output" src={url+String(targetDatos.target1)}/></div>
                <input type="text" name="drag1" value={dragDatos.drag1} onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file2" accept="image/png, image/jpeg"  onChange={(e)=>funcion2(e)} required />
                <div><img id="output2" src={url+String(targetDatos.target2)}/></div>
                <input type="text" name="drag2" value={dragDatos.drag2} onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file3" accept="image/png, image/jpeg"  onChange={(e)=>funcion3(e)} required />
                <div><img id="output3" src={url+String(targetDatos.target3)}/></div>
                <input type="text" name="drag3" value={dragDatos.drag3} onChange={handleDrags}  required/>
                <br/>
                <input type = "file" name = "file4"  accept="image/png, image/jpeg"  onChange={(e)=>funcion4(e)} required />
                <div><img id="output4" src={url+String(targetDatos.target4)}/></div>
                <input type="text" name="drag4" value={dragDatos.drag4} onChange={handleDrags} required/>
                <br/>
                <button type="submit"  className="boton">Enviar</button>
            </form>
            
        </div>
        </>
    );
    
}