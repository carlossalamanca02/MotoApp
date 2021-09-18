import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BarraMecanico } from "../Mecanico";
import {AiFillFileAdd } from 'react-icons/ai'
import './Servicio.css'


class RegistrarServicio extends Component{
    render(){
        return(
            <>
            <div className="container">
                    <div className="row titulor mb-3">
                        <div className="col-sm-1 iconoRegistro">
                            <AiFillFileAdd/>
                        </div>
                        <div className="col-sm-11">
                            <h1>REGISTRAR SERVICIO</h1>
                        </div>
                    </div>
                    <div className="row contenedorprincipal">
                        <div className="col-sm 6 mb-3  cliente">
                            <div className="row titulocliente">
                                <h4>CLIENTE</h4>
                            </div>
                            <div className="row  mb-3  cuadrocliente">
                                <form className="form-group">
                                  <div className="row justify-content-center">
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Cedula" name="cedula"></input>
                                        </div>
                                        <div className="col-sm-2">
                                            <button className="btn btn-primary btncliente">Buscar</button>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Nombre" name="nombre"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Apellido" name="apellido"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Dirección" name="direccion"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="number" placeholder="Celular" name="celular"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Correo" name="correo"></input>
                                        </div>

                                  </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm 6 mb-3 motocicleta">
                            <div className="row titulomotocicleta">
                                <h4>MOTOCICLETA</h4>
                            </div>
                            <div className="row  mb-3  cuadromotocicleta">
                                <form className="form-group">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Placa" name="placa"></input>
                                        </div>
                                        <div className="col-sm-2">
                                            <button className="btn btn-primary btnmoto">Buscar</button>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Nombre" name="nombre"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Marca" name="marca"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" type="text" placeholder="Linea" name="linea"></input>
                                        </div>  
                                  </div>
                                </form>
                            </div>
                        </div>
                        <div className="row  servicio">
                            <div className="row tituloServicio">
                                <h4>SERVICIO</h4>
                            </div>
                            <form className="form-control mb-3">
                                <div className="row justify-content-center">
                                    <div className="col-sm-6 mb-3">
                                        <label>Tipo de servicio</label>
                                        <select className="form-control" type="text"  name="tiposervicio">
                                            <option>Tipo de servicio...</option>
                                            <option>Reparacion</option>
                                            <option>Mantenimiento</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label for="marca">Fecha de ingreso</label>
                                        <input className="form-control" type="date" placeholder="Marca" name="marca"></input>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <textarea className="form-control" type="text" placeholder="Descripcion" name="nombre"></textarea>
                                    </div>
                                    <div className="col-sm-6 mb-3 align-self-end">
                                        <button className="btn btn-primary btnregistro">Registrar</button>
                                    </div>
                                  </div>
                            </form>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default RegistrarServicio;