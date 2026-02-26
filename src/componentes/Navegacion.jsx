import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <>
      <nav className="navbar navbar-expand-lg gap-2 p-3">
        <Link to={"/"}>Home</Link>
        <Link to={"/estudiantes"} >Estudiantes</Link>
        <Link to={"/acerca-de"}>Acerca de</Link>
      </nav>
    </>
  );
}
