import BQnSLogo from "../assets/BQnSLogo";
import { Blackwood, Blazemont, Fanginor, Ramcaster, Vicroft } from "../assets/IconosCasas";
import "./HomePage.css";

const HomePage = ({startTest}) => {
    return ( 
        <div className="HomePage">
            <BQnSLogo/>
            <div>
                <h1>Test de Casas</h1>
                <p>Realiza el test para descubrir con que casa eres mas compatible</p>
            </div>
            <div className="Houses">
                <Ramcaster/>
                <Vicroft/>
                <Fanginor/>
                <Blazemont/>
                <Blackwood/>
            </div>
            <button onClick={startTest}>Empezar</button>
        </div>
     );
}
 
export default HomePage;