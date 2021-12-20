import "../styles/eliminar.css";
import axios from "axios";
import {useHistory} from "react-router"
export default function Eliminar(props){
  let history=useHistory();
    const handleSi = (e) => {
      const url = '/2CM13ID3IDT7/Eliminar';
      axios.get(url+`?id=${props.id}`).then((response) => {
          console.log(response);
          if(response.status=="200"){
            window.location.replace("/2CM13ID3IDT7/#/App");
          }
        }, (error) => {
          console.log(error);
        });
      }
      
      
    const handleNo = (e) => {
          history.goBack();
      }



    return(
        <>
        <div className="blur"></div>
        <div className="Eliminar">
            <h1>¿Estas seguro de eliminar la pregunta {props.id}?</h1>
            <div className="botones">
            <button onClick={handleSi}>Si</button>
            <button onClick={handleNo}>No</button>
            </div>
        </div>
        </>
    );
}