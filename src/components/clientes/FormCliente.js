import React, { useContext, useEffect, useState } from 'react'
import { ModalContext } from '../../contexts/modalContext';
import { ClienteContext } from '../../contexts/clienteContext';

const FormCliente = () => {

    const {setshowModal} = useContext(ModalContext);

    const {registrarCliente,clienteActual,obtenerCliente,actualizarCliente} = useContext(ClienteContext);

    //PARA HACER UN EJEMPLO D ENTRADA DFE DATOS
    const clienteDefault = {
        nombres: '',
        apellidos: '',
        direccion: '',
        telefono: '',
        email: ''
    }

    const [cliente, setcliente] = useState(clienteDefault);
    const [mensaje, setmensaje] = useState(null);

     //en el caso de que ya se tenga uncliente en editar se hace uso del useEffect
    useEffect(() => {
        if(clienteActual !== null){
            //podriamos ponerlo asi pero existe la posibilidad de que direccion y telefono como no son oligatorios esten nulos
            //setcliente(clienteActual);
            //entonces se hace esto
            setcliente({
                ...clienteActual,
                direccion : clienteActual.direccion ? clienteActual.direccion : '',
                telefono : clienteActual.telefono ? clienteActual.telefono : '',
            })
        }
        else{
           setcliente(clienteDefault);
        }
        // eslint-disable-next-line
    }, [clienteActual]);
    //aqui si se depende de clienteActual por eso se pone esa variable por depende de su cambio

    //para que cambie los valores se le manda el objeto estado cliente que es el que esta en constante cambio

    const handleOnChange = e =>{
        //para visivilixar el cambio de los contenedores
        setcliente({
            ...cliente,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = e =>{
        //realizar un evento antes de cerrar ya sea llenar el formualrio
        e.preventDefault();
        console.log('enviando');
        //quiero ver si se esta guardando los elementos de valores de cliente
        console.log(cliente);

        //validar
        if(cliente.nombres.trim() === '' &&  cliente.apellidos.trim() === '' && cliente.email.trim() === ''){
            setmensaje('Los nombres, apellidos y el email son obligatorios');
            return;
        }


        //obtener objeto a enviar
        console.log(obtenerClienteAEnviar());
        //registramose el cliente usando la funcion
        //registrarCliente(obtenerClienteAEnviar());
        //actualizamos el registro si es para modificar
        if (clienteActual !== null){
            actualizarCliente(obtenerClienteAEnviar());
        }
        else{
            registrarCliente(obtenerClienteAEnviar());
        }




        //cerrary y limpiar el modal
        limpiarForm();
        cerrarModal();
    }

    const limpiarForm = () =>{
        setmensaje(null);
        setcliente(clienteDefault);
    }

    const cerrarModal = () =>{
        setshowModal(false);
        limpiarForm();
        obtenerCliente(null);
    }

    //creamo objeto que tenga datos validos
    const obtenerClienteAEnviar = () => {
        let clienteTemp = {...cliente}
        if(clienteTemp.direccion === "") delete clienteTemp.direccion;
        if(clienteTemp.telefono === "") delete clienteTemp.telefono;
        return clienteTemp;
    }

    return (
        <form onSubmit={handleOnSubmit}>
            {mensaje ? <div className="notification is-danger">{mensaje}</div>:null}
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Nombre Completo</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <p className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Nombre"
                        name="nombres"
                        value={cliente.nombres}
                        onChange={handleOnChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                    </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control is-expanded">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Apellidos"
                        name="apellidos"
                        value={cliente.apellidos}
                        onChange={handleOnChange}
                    />
                    </p>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Direccion</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Ingrese su direccion"
                        name="direccion"
                        value={cliente.direccion}
                        onChange={handleOnChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-map-marked-alt"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Telefono</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="text"
                        placeholder="Telefono"
                        name="telefono"
                        value={cliente.telefono}
                        onChange={handleOnChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-phone"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                <label className="label">Email</label>
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control is-expanded has-icons-left">
                    <input
                        autoComplete="off"
                        className="input"
                        type="email"
                        placeholder="Ingrese su Email"
                        name="email"
                        value={cliente.email}
                        onChange={handleOnChange}
                    />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    </div>
                </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label">
                </div>
                <div className="field-body">
                <div className="field">
                    <div className="control">
                    <button type="submit" className="button is-primary mr-1">Guardar</button>
                    <button
                        type="button"
                        className="button"
                        onClick={() => cerrarModal()}
                    >Cancelar</button>
                    </div>
                </div>
                </div>
            </div>
            </form>
     );
}

export default FormCliente;