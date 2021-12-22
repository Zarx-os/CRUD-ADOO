import { Link,Switch ,Route, HashRouter, Redirect} from "react-router-dom";
import { useState , useEffect} from "react";
import Login from "../pages/Login";
import "../styles/styles.css";
import Graphics from "./Graphics";
import Probar from "./Probar";
import ReactDOM from "react-dom";
import App from "../pages/App";
function Header(){

    const [auth,setAuth]=useState(false);

    

    useEffect(() => {
        setAuth(localStorage.getItem('auth'));
    }, [])

    if(auth=="true") {
        ReactDOM.render(
            <HashRouter>
                <Redirect to="/App"/>
                <Switch>
                    <Route exact path="/App"><App/></Route>
                </Switch>
            </HashRouter>
            ,document.getElementById("root"));

    }
    else{

    return(
    <HashRouter>
    <div className="header">
    <div className="pruebas">
        <Link to="/" className="headerLinks">Laboratorio</Link>
        <Link to="/probar" className="headerLinks">Ejercicios</Link>
        </div>
        <Link to="/login" className="headerLinks">Login</Link>
    </div>
    <Redirect to="/"/>
        <Switch>
            <Route exact path="/"><Graphics/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/probar"><Probar/></Route>
        </Switch>
    </HashRouter>

    )
    }

    return null;

}
export default Header;