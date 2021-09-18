import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './Navbar.css'


function Navbar (){

    return (

        <section className="navbar">
            <a href="/" className="navbar-item">INICIO</a>
            <a href= "/LoginCliente" className="navbar-item">CLIENTES</a>
            <a href="/LoginTrabajadores" className="navbar-item">TRABAJADORES</a>
        </section>

        
    )
}

export default Navbar;