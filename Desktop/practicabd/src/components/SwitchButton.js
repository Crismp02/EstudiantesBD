import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Escuelas from "../Escuelas";
import App from "../App";
import { MdPerson } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

function SwitchButton({changeToEscuelas, changeToEstudiantes, inEscuelas}){
   return(
   <div className="Boton" style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}>
        <div onClick={changeToEstudiantes} className={inEscuelas ? "Boton2" : "Boton2 BotonActivo"}><MdPerson color={inEscuelas ? "#B2B2B2" : "#fff"} size={50}/></div>
        <div onClick={changeToEscuelas} className={inEscuelas ? "Boton3 BotonActivo" : "Boton3"}><FaSchool color={inEscuelas ? "#fff" : "#B2B2B2"} size={50}/></div>
    </div> 
)
}

export default SwitchButton;