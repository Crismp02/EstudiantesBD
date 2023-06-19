import { useEffect, useState } from "react";
import EstRow from "./EstRow";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function EstPage() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get(BASE_URL + "/estudiantes");
      const studentsFromBackend = response.data
      setStudents(studentsFromBackend)
    };
    fetchStudents();
  }, []);

  return (
    <>
      <h1 className="Titulos">Estudiantes</h1>
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
        <div style={{ overflow: 'auto', height: '65vh'}}>
        {students ? students.map(student => <EstRow {...student} />) : 'Loading...'}
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
