import React from 'react'
import Layout from '../components/commons/Layout';
import TableCliente from '../components/clientes/TableCliente';
import ToolbarCliente from '../components/clientes/ToolBarCliente';
import Modal from '../components/commons/Modal';
import FormCliente from '../components/clientes/FormCliente';
import { ClienteContextProvider } from '../contexts/clienteContext';

const Cliente = () => {
    return (
        <Layout>
            <ClienteContextProvider>
                <div className="panel">
                    <div className="panel-heading">
                        Clientes
                    </div>
                    <div className="box">
                        <ToolbarCliente/>
                        <TableCliente/>
                    </div>
                </div>
                <Modal>
                    <FormCliente/>
                </Modal>
            </ClienteContextProvider>
        </Layout>
     );
}

export default Cliente;