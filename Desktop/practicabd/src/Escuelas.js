import "./App.css";
import { MdPerson } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Escuelas() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <div
            className="Boton"
            style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="Boton2"><MdPerson color="#fff" size={50}/></div>
            <div className="Boton3"><FaSchool color="#B2B2B2" size={50}/></div>
          </div>
        </div>
        <h1 className="Titulos">Escuelas</h1>
        <div
          className="Tabla"
          style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}
        >
          <div className="HeaderTabla">
            <div className="ContenidoTabla">
              <h2 className="Titulos3">IDEstudiante</h2>
              <h2 className="Titulos3">Cédula</h2>
              <h2 className="Titulos3">NombreEst</h2>
              <h2 className="Titulos3">CodEscuela</h2>
              <h2 className="Titulos3">DirecciónEst</h2>
              <h2 className="Titulos3">TeléfonoEst</h2>
              <h2 className="Titulos3">FechaNac</h2>
              <h2 className="Titulos3">StatusEst</h2>
            </div>
          </div>
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
          <div
            className="Separador"
            style={{ borderBottom: "3px solid rgb(212, 212, 212)" }}
          >
            <div className="Info">
            <h1 className="CuerpoTexto">23456789</h1>
            <h1 className="CuerpoTexto">3000000</h1>
            <h1 className="CuerpoTexto">José Andrés Rodríguez Seminario</h1>
            <h1 className="CuerpoTexto">INF</h1>
            <h1 className="CuerpoTexto">Los Olivos</h1>
            <h1 className="CuerpoTexto">0424999999</h1>
            <h1 className="CuerpoTexto">04/07/2002</h1>
            <h1 className="CuerpoTexto">A</h1>
            </div>
            <div className="BorrarEditar"> 
            <div className="BotonesAE"><FaEdit color="#fff" size={25}/></div>
            <div className="BotonesAE"><FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
          <div
            className="Separador"
            style={{ borderBottom: "3px solid rgb(212, 212, 212)" }}
          >
            <div className="Info">
            <h1 className="CuerpoTexto">Hola</h1>
            <h1 className="CuerpoTexto">Hola</h1>
            <h1 className="CuerpoTexto">Hola</h1>
            </div>
            <div className="BorrarEditar"> 
            <div className="BotonesAE"><FaEdit color="#fff" size={25}/></div>
            <div className="BotonesAE"><FaTrashAlt color="#fff" size={20}/></div>
            </div>
          </div>
        </div>
        <div className="Container">
          <div
            className="Añadir"
            style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}
          >
            <h1 className="Titulos2">+</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Escuelas;
