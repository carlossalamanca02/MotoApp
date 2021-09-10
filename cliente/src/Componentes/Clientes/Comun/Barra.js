import React, {Component} from "react";
import './Barra.css';
import 'bootstrap/dist/css/bootstrap.min.css'


class Barra extends Component{
    render(){
        return(
                <section class="container">
                    <section className="row">
                        <section className="col-sm-2">
                            <section className="row taller" >
                                <section className="col-sm-6">
                                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="" width="100%"/>
                                </section>
                                <section className="col-sm-6">
                                    <a className="motoapp">MOTOAPP</a>
                                </section>                    
                            </section>
                            <section className="row justify-content-center user">
                                <section className="col-sm-8 align-self-center">
                                    <img src={process.env.PUBLIC_URL + '/user.png'} alt="" width="100%" />
                                </section>
                                <section className="col-sm-12 align-self-center">
                                    <p>NOMBRES Y APELLIDOS</p>
                                    <p>Motocicleta</p>
                                </section>                    
                            </section>
                            <section className="row justify-content-center">
                                <section className="col-sm-12 align-self-center">
                                    <nav class="navbar">
                                        <ul>
                                            <li className="nav-item active"><a href="#">HISTORIAL</a></li>
                                            <li className="nav-item"><a href="#">ESTADO</a></li>
                                            <li className="nav-item"><a href="#">SALIR</a></li>
                                        </ul>
                                    </nav>
                                </section>
                            </section>
                        </section>      
                    </section>
                </section>
        );
    }
}

export default Barra;