import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Barra} from '../../Clientes'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaMotorcycle } from 'react-icons/fa'
import './EstadoServicio.css'



class EstadoServicio extends Component{
    render(){
        return(
            <>
                < Barra />
                <div className="container">
                    <div className="row tituloe mb-3">
                        <div className="col-sm-1 iconoEstado">
                            <FaMotorcycle/>
                        </div>
                        <div className="col-sm-11">
                            <h1>ESTADO EL VEHICULO</h1>
                        </div>
                    </div>
                    <div className="row contenedorp">
                        <div className="col-sm 6 mb-3  actual">
                            <div className="row tituloactual">
                                <h4>ESTADO ACTUAL DE LA MOTOCOCLETA</h4>
                            </div>
                            <div className="row  mb-3  cuadro">
                                <div className="col-sm-12  estado">
                                    ESTADO
                                </div>
                            </div>

                        </div>
                        <div className="col-sm 6 mb-3 actualizacion">
                            <div className="row tituloactualización">
                                <h4>ESTADO ACTUAL DE LA MOTOCOCLETA</h4>
                            </div>
                            <div className="row  mb-3  cuadroactualización">
                                <div className="col-sm-12  fecha">
                                    fecha
                                </div>
                            </div>
                        </div>
                        <div className="row evidencia">
                            <div className="col-sm-4">
                                <div className="row">Imagen</div>
                                <div className="row">Descripción</div>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default EstadoServicio;