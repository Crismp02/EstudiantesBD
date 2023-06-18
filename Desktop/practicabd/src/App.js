import "./App.css";
import { MdPerson } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import EstPage from "./components/estudiantes/EstPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <div
            className="Boton"
            style={{ boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.2)" }}
          >
            <div className="Boton2">
              <MdPerson color="#fff" size={50} />
            </div>
            <div className="Boton3">
              <FaSchool color="#B2B2B2" size={50} />
            </div>
          </div>
        </div>
        <EstPage />
      </header>
    </div>
  );
}

export default App;
