import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Modal from "../Modal";

export default function EstRow({ idestudiante, cedula, nombreest, codescuela, direccionest, telefonoest, fechanac, statusest }){
    const [active, setActive] = useState(false);
    const [activeEl, setActiveEl] = useState(false);

    const toggle = () => {
      setActive(!active);
    }
    const toggleEl = () => {
      setActiveEl(!activeEl);
    }

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
            <div className="BotonesAE" onClick={toggle}>
            <Modal active={active} toggle={toggle}>
              <div className="ModalBase">
                <h1>Funciona Editar</h1>
              </div>
            </Modal>
            <FaEdit color="#fff" size={25}/>
            </div>
            <div className="BotonesAE" onClick={toggleEl}>
            <Modal active={activeEl} toggle={toggleEl}>
              <div className="ModalBase">
                <h1>Funciona eliminar</h1>
              </div>
            </Modal>
              <FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
    )

}