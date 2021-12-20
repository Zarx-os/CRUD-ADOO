import { Link,Route,Switch,BrowserRouter as Router} from "react-router-dom";
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
         <Route exact path="/crear"><Crear id={props.id}/></Route>
         <Route exact path="/modificar"><Modificar id={props.id}/></Route>
         <Route exact path="/visualizar"><Visualizar id={props.id}/></Route>
         <Route exact path="/eliminar"><Eliminar id={props.id} /></Route>
     </Switch>
      </Router>
   );
}
export default Tap;

