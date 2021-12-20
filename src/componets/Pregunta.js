
import Tap from "./Tap";
import "../styles/styles.css";
function Pregunta(props){
    return(
        <tr>
            <td>Pregunta {props.id}</td>
            <td>
                <Tap id={props.id} ruta="/modificar" contenido="Modificar"/>
                <Tap id={props.id} ruta="/eliminar" contenido="Eliminar"/>
                <Tap id={props.id} ruta="/visualizar" contenido="Visualizar"/>
            </td>
        </tr>);
}

export default Pregunta;