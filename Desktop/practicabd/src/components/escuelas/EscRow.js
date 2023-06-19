import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function EscRow({ codescuela, nombreescuela, fechacreacion}){
    return (
        <div
            className="Separador"
            style={{ borderBottom: "3px solid rgb(212, 212, 212)" }}
          >
            <div className="Info">
            <h1 className="CuerpoTexto">{codescuela}</h1>
            <h1 className="CuerpoTexto">{nombreescuela}</h1>
            <h1 className="CuerpoTexto">{fechacreacion}</h1>
            </div>
            <div className="BorrarEditar"> 
            <div className="BotonesAE"><FaEdit color="#fff" size={25}/></div>
            <div className="BotonesAE"><FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
    )

}