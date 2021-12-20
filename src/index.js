import Header from "./componets/Header";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

function Index(){



    
        return(
            <>
            <div className="index"></div>
            <div className="head"><Header/></div>
            </>
        );
}
const inicio=<Index/>;

ReactDOM.render(<HashRouter>
    <Index/>
</HashRouter>
,document.getElementById("root"));