import { useEffect, useState } from "react";
import EscRow from "./EscRow";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function EscPage() {
    const [escuelas, setEscuelas] = useState(null);

  useEffect(() => {
    const fetchEscuelas = async () => {
      const response = await axios.get(BASE_URL + "/escuelas");
      const escuelasFromBackend = response.data
      setEscuelas(escuelasFromBackend)
    };
    fetchEscuelas();
  }, []);

  return (
    <>
      <h1 className="Titulos">Escuelas</h1>
      <div
        className="Tabla"
        style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="HeaderTabla">
          <div className="ContenidoTabla">
            <h2 className="Titulos3">CodEscuela</h2>
            <h2 className="Titulos3">NombreEscuela</h2>
            <h2 className="Titulos3">FechaCreación</h2>
          </div>
        </div>
        <div style={{ overflow: 'auto', height: '65vh'}}>
        {escuelas ? escuelas.map(escuelas => <EscRow {...escuelas} />) : 'Loading...'}
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
    </>
  );
}
