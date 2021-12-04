import {BrowserRouter as Router,Link,Route,Switch,} from "react-router-dom";
import "../styles/styles.css";
import Crear from "../pages/Crear";
import Modificar from "../pages/Modificar";
import Eliminar from "../pages/Eliminar";
import Visualizar from "../pages/Visualizar";

function Tap (props){

   return( 
      <Router>
      <button>
         <Link to={props.ruta} className="Links">{props.contenido}</Link>     
      </button>
      <Switch>
         <Route exact path="/2CM13ID3IDT7/App/crear"><Crear id={props.id} /></Route>
         <Route exact path="/2CM13ID3IDT7/App/modificar"><Modificar id={props.id}/></Route>
         <Route exact path="/2CM13ID3IDT7/App/visualizar"><Visualizar id={props.id}/></Route>
         <Route exact path="/2CM13ID3IDT7/App/eliminar"><Eliminar id={props.id}/></Route>
      </Switch>
      </Router>
   );
}
export default Tap;

