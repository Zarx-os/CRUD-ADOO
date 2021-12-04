
import Tap from "./Tap";
import "../styles/styles.css";
function Pregunta(props){
    return(
        <tr>
            <td>Pregunta {props.id}</td>
            <td>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/App/modificar" contenido="Modificar"/>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/App/eliminar" contenido="Eliminar"/>
                <Tap id={props.id} ruta="/2CM13ID3IDT7/App/visualizar" contenido="Visualizar"/>
            </td>
        </tr>);
}

export default Pregunta;