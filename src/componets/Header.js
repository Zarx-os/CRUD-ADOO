import { BrowserRouter as Router, Link,Switch ,Route} from "react-router-dom";
import Login from "../pages/Login";
import "../styles/styles.css";
import Graphics from "./Graphics";
import Probar from "./Probar";
function Header(){

    
    return(
    <Router>
    <div className="header">
    <div className="pruebas">
        <Link to="/2CM13ID3IDT7/" className="headerLinks">Lab</Link>
        <Link to="/2CM13ID3IDT7/probar" className="headerLinks">Probar</Link>
        </div>
        <Link to="/2CM13ID3IDT7/login" className="headerLinks">Login</Link>
        
    </div>
        <Switch>
            <Route exact path="/2CM13ID3IDT7/"><Graphics/></Route>
            <Route exact path="/2CM13ID3IDT7/login"><Login/></Route>
            <Route exact path="/2CM13ID3IDT7/probar"><Probar/></Route>
        </Switch>
    </Router>

    )

}
export default Header;