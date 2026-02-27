import { useEffect } from "react";
import endpoints from "../_endpoints";
import { obtenerDatos } from "../api/fetch";
import AjaxLoader from "../componentes/AjaxLoader";
import Navegacion from "../componentes/Navegacion";
import Tabla from "../componentes/Tabla";
import { useState } from "react";

export default function Estudiantes() {

    const [estudiantes, setEstudiantes] = useState(null);

    const setup = async ()=>{
        // aplico destru
        const json = await obtenerDatos(endpoints.estudiantes)
        console.log(json);
        setEstudiantes( json.data );
        
    } 

    useEffect(() => {
        setup();
    }, []);

   

    return(
        <>
            <Navegacion/>
            <h2>Estudiantes</h2>
            { !estudiantes ? <AjaxLoader/> : <div>
                <ul>
                    {
                        estudiantes.map( estudiantes => (
                            <li>
                                {estudiantes.nombre}
                            </li>
                        ))
                    }
                </ul>
                </div>
            }
            
        </>
    )
}