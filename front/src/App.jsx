import Home from "./views/home/Home";
import MisTurnos from "./views/turnos/MisTurnos";
import { Routes, Route, useLocation } from "react-router-dom";
import TurnoMuscu from "./views/turnos/TuenoMusco";
import TurnosYoga from "./views/turnos/TurnosYoga";
import TurnosCros from "./views/turnos/TusnosCros";
import TurnosSpinn from "./views/turnos/TurnoSpinn";
import LoginRegister from "./views/login-register/Login-Register";
import NavBar from "./views/home/NavBar";
import MiPerfil from "./views/miperfil/MiPerfil";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);

  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TurnoMusco" element={<TurnoMuscu />} />
        <Route path="/TurnosYoga" element={<TurnosYoga />} />
        <Route path="/TurnoSpinn" element={<TurnosSpinn />} />
        <Route path="/TurnosCros" element={<TurnosCros />} />
        <Route path="/MisTurnos" element={<MisTurnos />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
      </Routes>
    </div>
  );
}

export default App;
