import { ELIMINAR_CLIENTE, MODIFICAR_CLIENTE, OBTENER_CLIENTE, OBTENER_CLIENTES, REGISTRAR_CLIENTE } from "../const/actionTypes";

// eslint-disable-next-line
export default (state,action) => {
    switch (action.type) {
        case OBTENER_CLIENTES:
            return {
                ...state,
                clientesList: action.payload
            };
        case REGISTRAR_CLIENTE:
            return {
                ...state,
                clientesList: [...state.clientesList , action.payload]
                //clienteslist tendra una copia pmas el cliente que viene en el payload
            };
        case OBTENER_CLIENTE:
            return{
                ...state,
                clienteActual: action.payload
            };
        case MODIFICAR_CLIENTE:
            return{
                ...state,
                clientesList: state.clientesList.map(
                    cliente => cliente.idCliente === action.payload.idCliente ? action.payload : cliente
                )
            };
        case ELIMINAR_CLIENTE:
            return{
                ...state,
                clientesList: state.clientesList.filter(cliente => cliente.idCliente !== action.payload)
            };
        default:
            return state;
    }
}