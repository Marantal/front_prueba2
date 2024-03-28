import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/modalContext';
import { ClienteContext } from '../../contexts/clienteContext';
const RowCliente = ({cliente}) => {

    const {setmodalTitle, setshowModal} = useContext(ModalContext);


    //agreagamos context para cliente
    const {obtenerCliente, eliminarCliente} = useContext(ClienteContext);


    //funcionalñidad para botones
    const modificarCliente = () => {
        //obtenemos el cliente como un row es cada fila se manda el cliente
        //usando el reducer ya no es necesario pasar niguna clase
        obtenerCliente(cliente);
        console.log("Modificando...");
        setmodalTitle('Editando cliente');
        setshowModal(true);
    }

    /*const eliminarCliente = () => {
        console.log("Eliminando...");

    }*/

    return (
        <tr>
            <td>
                <button
                    className="button is-small is-info mr-1" 
                    title="Modificar"
                    onClick={ () => modificarCliente() }
                >
                    <span className="icon is-small">
                    <i className="fas fa-edit"></i>
                    </span>
                </button>
                <button
                    className="button is-small is-danger"
                    title="Eliminar"
                    onClick={ () => eliminarCliente(cliente.idCliente) }
                >
                    <span className="icon is-small">
                    <i className="fas fa-trash-alt"></i>
                    </span>
                </button>
            </td>
            <td>{cliente.nombres}</td>
            <td>{cliente.apellidos}</td>
            <td>{cliente.direccion}</td>
            <td>{cliente.telefono}</td>
            <td>{cliente.email}</td>
        </tr>
    );
}

export default RowCliente;