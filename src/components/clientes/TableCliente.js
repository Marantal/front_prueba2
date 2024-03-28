import React, { useContext, useEffect} from 'react'
import RowCliente from './RowCliente';
import { ClienteContext } from '../../contexts/clienteContext';

const TableCliente = () => {

    //datos que tendermos en el componente
    //use State antes de Return
    //variable y metodo para cambiar //valor inicial
    /*const [clientesList, setclientesList] = useState([
        {
            "idCliente":1,
            "nombres": "XIMENA",
            "apellidos": "Rivera",
            "direccion": "Av. Landaeta",
            "telefono": "23456578",
            "email": "juanr@GMAIL.COM"
        },
        {
            "idCliente":2,
            "nombres": "mercedes",
            "apellidos": "Rivera",
            "direccion": "Av. Landaeta",
            "telefono": "23456578",
            "email": "juanr@GMAIL.COM"
        }
    ]);*/

    const {clientesList,obtenerClientes} = useContext(ClienteContext);

    useEffect(() => {
        obtenerClientes();
        //se pone por si necesita alguna dependencia lo del keyword
        //en este caso no se pone porque no depende de nignuna variable y por la tanto se pone la linea siguiente
        // eslint-disable-next-line
    }, []);

    if(clientesList.length === 0) return <center><p>Nos existen clientes.</p></center>
    return (
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Nombres</th>
                        <th>Apeliidos</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientesList.map(cliente =>(
                            //semlempone el key para diferenciar
                            <RowCliente cliente={cliente} key={cliente.idCliente}/>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default TableCliente;