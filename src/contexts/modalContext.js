import React, { createContext, useState } from 'react'

//export por importar en otro archivo
export const ModalContext = createContext();

export const ModalContextProvider = props => {
    //hacemos que estos componentes esten disponibles para todo el proyecto
    const [showModal, setshowModal] = useState(false);
    const [modalTitle, setmodalTitle] = useState('');

    return(
       <ModalContext.Provider
       value ={
        //declaramos los valores que queremos qu ecmabine globalmente
            {
                //abrimos otras llaves para que sean modelos
            showModal,
            modalTitle,

            setshowModal,
            setmodalTitle
        }
       }
       >
        {/* todos los componentes hijos de este tendran */}
        {props.children}
       </ModalContext.Provider>
    )
}