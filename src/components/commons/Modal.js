import React, { useContext} from 'react'
import { ModalContext } from '../../contexts/modalContext';

const Modal = (props) => {

    //forma para abrir y cerrar un modal
    //crear un estado

   //ya no disponemos de show modal porque fue llevado al contexto
   const {showModal,modalTitle, setmodalTitle, setshowModal} = useContext(ModalContext);
   //hacemos destructuracion de lo que necesitamos de este componente


    //la setShowmodal reeemplaza a cerrar modal
    /*const cerrarModal = () =>{
        console.log("cerrando");
    }*/



    return (
        //is active es para que aparezca
        <div className={`modal ${showModal ? `is-active`: ``}`}>
            <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">{modalTitle}</p>
                        <button 
                            className="delete"
                            aria-label="close"
                            onClick={ () => {
                                setshowModal(false);
                                setmodalTitle('');
                                }}                        >
                        </button>
                    </header>
                    <section className="modal-card-body">
                        {/* todos los elementos se renderizaran aca  */}
                        {props.children}
                    </section>
            </div>
        </div>
     );
}

export default Modal;