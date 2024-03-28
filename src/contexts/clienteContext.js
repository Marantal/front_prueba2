import React, { createContext, useReducer } from 'react'
import clienteReducer from '../reducer/clienteReducer';
import { ELIMINAR_CLIENTE, MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from '../const/actionTypes';
//import { v4 as uuidv4 } from "uuid";
import Axios from 'axios';
import Swal from 'sweetalert2'

export const ClienteContext = createContext();

export const ClienteContextProvider = props =>{

    const initialState = {
        clientesList : [],
        clienteActual : null
    }

    const [state,dispatch] = useReducer(clienteReducer, initialState);

    const obtenerClientes = async () => {
        //utilizamos axcios debemos insdicar que es asincrona
        //y que esto debe ser ejecutado antes con async y await

        //si hacemos tantas consultas se tendran que cambiar
        //crearemos variables de entorno
        //const resultado = await Axios.get('/clientes');

        //buena practica usar try y catch
        try {
            const resultado = await Axios.get('/clientes');
            //console.log(resultado);

            dispatch({
                type: OBTENER_CLIENTES,
                payload: resultado.data
            })
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se logro obtener los clientes'
            })
            console.log(error);
        }

        /*console.log(resultado);
        //const clientes = [];
        //el dispatch va a reducer
        //el resultado tiene la consulta
        dispatch({
            type: OBTENER_CLIENTES,
            payload: resultado.data
        })*/
    }

    const registrarCliente = async cliente => {

        try {
            /*let clienteNuevo = {
                ...cliente,
                //para generar el id instalaremos una libreria de npm uuid
                //la instalamos como dependencia de desarrollo
                idCliente: uuidv4()
            }

            console.log(clienteNuevo);*/

            const resultado = await Axios.post('/clientes', cliente);
            console.log(resultado);
            // se púede poner directo o en una funcion si hayq ue mandar un objeto

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente registrado correctamente',
                toast: true
            })

            dispatch({
                type: REGISTRAR_CLIENTE,
                payload : resultado.data
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el cliente'
            })
            console.log(error);
        }
    }

    const obtenerCliente = async cliente => {
        try {
            let clienteEncontrado =  null;

            if(cliente !== null){
                console.log(cliente.idCliente);
                const resultado = await Axios.get(`/clientes/${cliente.idCliente}`);
                clienteEncontrado = resultado.data;
            }
            else{
                clienteEncontrado = cliente;
            }
            dispatch({
                type: OBTENER_CLIENTE,
                payload: clienteEncontrado
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo obtener el cliente'
            })
            console.log(error);
        }

    }

    const actualizarCliente = async cliente => {

        try {
            const resultado = await Axios.put('/clientes', cliente);

            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'Cliente modificado correctamente',
                toast: true
            })

            dispatch({
                type: MODIFICAR_CLIENTE,
                payload: resultado.data
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo actualizar le cliente'
            })
            console.log(error);
        }
    }

    const eliminarCliente = async idCliente => {
        try {
            Swal.fire({
                icon: 'question',
                title: '¿Desea continuar?',
                text: 'Se eliminara el cliente seleccionado',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar'
            }).then(async (result) =>{
                if(result.value){
                    await Axios.delete(`/clientes/${idCliente}`);

                    Swal.fire({
                        icon: 'success',
                        title: 'Correcto',
                        text: 'Cliente eliminado correctamente',
                        //toast: true es para que sea un linea pequeña
                    })
                    dispatch({
                        type: ELIMINAR_CLIENTE,
                        payload: idCliente
                    })
                }
            })

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo eliminar el cliente'
            })
            console.log(error);
        }
    }

    return (
        <ClienteContext.Provider
            value = {{
                clientesList: state.clientesList,
                clienteActual: state.clienteActual,


                obtenerClientes,
                registrarCliente,
                obtenerCliente,
                actualizarCliente,
                eliminarCliente
            }}
        >
            {props.children}
        </ClienteContext.Provider>
    )
}

