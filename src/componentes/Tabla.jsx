export default function Tabla({array}) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col"> ID </th>
                    <th scope="col"> NOMBRE </th>
                </tr>
            </thead>

            <tbody>
                {
                    array.map( item =>
                        (
                            <tr key={item.id}>
                                <th scope="row"> {item.id} </th>
                                <td> {item.nombre} </td>
                            </tr>
                        )
                     )                    
                }
            </tbody>

        </table>
    )
    
}