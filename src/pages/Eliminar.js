import "../styles/eliminar.css";
import axios from "axios";
import {useHistory} from "react-router"
export default function Eliminar(props){

    const handleSi = (e) => {
      const url = '/2CM13ID3IDT7/Eliminar';
      axios.get(url+`?id=${props.id}`).then((response) => {
          console.log(response);
          if(response.status=="200")location.assign("/2CM13ID3IDT7");
        }, (error) => {
          console.log(error);
        });
      }
      
      let history=useHistory();
    const handleNo = (e) => {
        history.push("/2CM13IDIDT7");
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