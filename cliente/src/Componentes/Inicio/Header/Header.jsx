import React from 'react';
import { Navbar } from '../../Inicio';
import './Header.css'
function Header (){
    return (
        <section className="header">
        <section className="header-top">
          <section className="header-top__logo">
            
            <a href="/" className="header-logo">
              <img src={process.env.PUBLIC_URL + '/Logo.png'} className="logo"/>
              MOTOAPP
              </a>     
          </section>
          <section className="header-top__navbar">
            <section className="header-top__navigation">
              <Navbar />
            </section>
          </section>
        </section>
        <section className="header-bottom">
          <section className="Title-Moto"><h1>TALLER DE MOTOCICLETAS</h1></section>
          <section className="intro-moto"><p>ACERCATE A NUESTRO TALLER Y CONSIGUE ATENCIÓN DE ALTA CALIDAD Y CONFIANZA 
            CON NUESTRA APP WEB DESTINADA A QUE ESTÉS AL TANTO DEL ESTADO DE TU MOTOCICLETA
            Y LOS CAMBIOS QUE SE HACEN EN ELLA.</p></section>
          <section className="buttons-intro">
            <button className="client-button">¿ERES CLIENTE?</button>
            <button className="personal-button">¿TRABAJA CON NOSOTROS?</button>
          </section>
        </section>
      </section>
  
    )
}

export default Header;