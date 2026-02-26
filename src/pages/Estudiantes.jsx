import { useEffect } from "react";
import endpoints from "../_endpoints";
import { obtenerDatos } from "../api/fetch";
import AjaxLoader from "../componentes/AjaxLoader";
import Navegacion from "../componentes/Navegacion";

export default function Estudiantes() {


    const setup = async ()=>{
        // aplico destru
        const {total} = await obtenerDatos(endpoints.estudiantes)
        console.log(total);
        
    }

    useEffect(() => {
        setup();
    }, []);

   

    return(
        <>
            <Navegacion/>
            <h2>Estudiantes</h2>
            <AjaxLoader/>
        </>
    )
}