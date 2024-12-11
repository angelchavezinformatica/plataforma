import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./layouts/Register";
import Login from "./layouts/Login";
import Home from "./layouts/Home";
import Candidatos from "./layouts/Candidatos";
import Innovadores from "./layouts/Innovadores";
import Homeinova from "./layouts/Homeinova";
import Publicar from "./layouts/Publicar";
import Profile from "./layouts/Profile";

import Homecandidato from "./layouts/Homecandidato";
import HomeBuscar from "./layouts/HomeBuscar";
import Proyecto1 from "./layouts/Proyecto1";
import Tareas from "./layouts/Tareas";
import { Toaster } from "sonner";

import "./App.css"; // Asegúrate de que la ruta sea correcta
import "./styles/profile.css";
// import "./styles/proyectos.css";

function App() {
  return (
    <>
      <Toaster />
      <div className="w-full h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/candidatos" element={<Candidatos />} />
            <Route path="/innovadores" element={<Innovadores />} />
            <Route path="/homeinova" element={<Homeinova />} />
            <Route path="/publicar" element={<Publicar />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/homecandidato" element={<Homecandidato />} />
            <Route path="/homebuscar" element={<HomeBuscar />} />
            <Route path="/proyecto1" element={<Proyecto1 />} />

            <Route path="/tareas" element={<Tareas />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
