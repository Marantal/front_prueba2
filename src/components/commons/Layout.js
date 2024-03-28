import React from 'react'
import Header from './Header';
import Menu from './Menu';
 const Layout = (props) => {
    //solo puede retornar una etiqueta o componente en un sfc
    return (
        <div>
            <Header/>
            <br/>
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Menu/>
                    </div>
                    <div className="column">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
     );
 }

 export default Layout;