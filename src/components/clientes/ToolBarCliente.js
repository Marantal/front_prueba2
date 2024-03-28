import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/modalContext';
import { ClienteContext } from '../../contexts/clienteContext';

const ToolbarCliente = () => {

    const {setmodalTitle, setshowModal} = useContext(ModalContext);

    const {obtenerCliente} = useContext(ClienteContext);

    const abrirModal = () => {
        setmodalTitle('Registrar nuevo cliente');
        setshowModal(true);
        obtenerCliente(null);
    };


    return (
        <div className="container">
            <button 
                className="button is-small is-primary" 
                title="Añadir"
                onClick={() => abrirModal()}
            >
                <span className="icon is-small">
                    <i className="fas fa-add"></i>
                </span>
                <span>
                    Registrar nuevo
                </span>
            </button>
        </div>
    );
}

export default ToolbarCliente;