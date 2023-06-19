import "./App.css";
import { MdPerson } from "react-icons/md";
import { FaSchool } from "react-icons/fa";
import EstPage from "./components/estudiantes/EstPage";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SwitchButton from "./components/SwitchButton";
import { useState } from "react";
import EscPage from "./components/escuelas/EscPage";


function App() {
  const [inEscuelas,setInEscuelas ] = useState (false)

  const changeToEscuelas = () => {
    setInEscuelas(true)
  }
  const changeToEstudiantes = () => {
    setInEscuelas(false)
  }
  return (
    <div className="App">
         
      <header className="App-header">
        <div className="Container">
          <SwitchButton changeToEscuelas={changeToEscuelas} changeToEstudiantes={changeToEstudiantes} inEscuelas={inEscuelas}/>
        </div>
        { inEscuelas ? <EscPage/> : <EstPage />}
      </header>
      
     
    </div>
   
  );
}

export default App;
