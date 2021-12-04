import { BrowserRouter as Router, Link,Switch ,Route} from "react-router-dom";
import Login from "../pages/Login";
import "../styles/styles.css"
function Header(){

    
    return(

    <Router>
    <div className="header">
        <Link to="/2CM13ID3IDT7/login" className="headerLinks">Login</Link>
        <Link to="/2CM13ID3IDT7/register" className="headerLinks">Registro</Link>
    </div>
        <Switch>
            <Route exact path="/2CM13ID3IDT7/register"> </Route>
            <Route exact path="/2CM13ID3IDT7/login"><Login/></Route>
        </Switch>
    </Router>

    )

}
export default Header;