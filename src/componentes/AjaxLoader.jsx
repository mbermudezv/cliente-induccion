import spinner from "../assets/spiner.gif"

export default function AjaxLoader() {
    return(
        <div className="row">
            <div className="col-12 text-center">
                <img src={spinner} alt="Spinner de carga de atos" />
                <p>Cargando datos. Por favor espere</p>
            </div>
        </div>
    )
}