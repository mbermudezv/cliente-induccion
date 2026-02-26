
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Estudiantes from "./pages/Estudiantes";
import Acerca from "./pages/Acerca";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="estudiantes" element={<Estudiantes/>}/>
      <Route path="acerca-de" element={<Acerca/>}/>
    </Routes>
  )
}
