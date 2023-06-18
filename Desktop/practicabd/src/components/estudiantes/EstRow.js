import { FaSchool } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function EstRow({ idestudiante, cedula, nombreest, codescuela, direccionest, telefonoest, fechanac, statusest }){
    return (
        <div
            className="Separador"
            style={{ borderBottom: "3px solid rgb(212, 212, 212)" }}
          >
            <div className="Info">
            <h1 className="CuerpoTexto">{idestudiante}</h1>
            <h1 className="CuerpoTexto">{cedula}</h1>
            <h1 className="CuerpoTexto">{nombreest}</h1>
            <h1 className="CuerpoTexto">{codescuela}</h1>
            <h1 className="CuerpoTexto">{direccionest}</h1>
            <h1 className="CuerpoTexto">{telefonoest}</h1>
            <h1 className="CuerpoTexto">{fechanac}</h1>
            <h1 className="CuerpoTexto">{statusest}</h1>
            </div>
            <div className="BorrarEditar"> 
            <div className="BotonesAE"><FaEdit color="#fff" size={25}/></div>
            <div className="BotonesAE"><FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
    )

}