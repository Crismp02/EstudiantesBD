import { FaSchool } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

export default function EstRow(){
    return (
        <div
            className="Separador"
            style={{ borderBottom: "3px solid rgb(212, 212, 212)" }}
          >
            <div className="Info">
            <h1 className="CuerpoTexto">12345678</h1>
            <h1 className="CuerpoTexto">28534711</h1>
            <h1 className="CuerpoTexto">Cristina Morales Padrón</h1>
            <h1 className="CuerpoTexto">INF</h1>
            <h1 className="CuerpoTexto">Villa Granada</h1>
            <h1 className="CuerpoTexto">04249670552</h1>
            <h1 className="CuerpoTexto">03/08/2002</h1>
            <h1 className="CuerpoTexto">A</h1>
            </div>
            <div className="BorrarEditar"> 
            <div className="BotonesAE"><FaEdit color="#fff" size={25}/></div>
            <div className="BotonesAE"><FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
    )

}