
import Tap from "./Tap";
import "../styles/styles.css";
function Pregunta(props){
    return(
        <tr>
            <td>Pregunta {props.id}</td>
            <td>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/modificar" contenido="Modificar"/>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/eliminar" contenido="Eliminar"/>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/visualizar" contenido="Visualizar"/>
            </td>
        </tr>);
}

export default Pregunta;