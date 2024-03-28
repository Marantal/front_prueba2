import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="logo.png" alt="logo empresa" />
                </Link>
            </div>
        </div>
    )
}

//exportar compomente

export default Header;

//paa renderizar vamos a app.js