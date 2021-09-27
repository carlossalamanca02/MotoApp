import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {AiFillFileAdd } from 'react-icons/ai'
import './Servicio.css'
class RegistrarServicio extends Component{

    peticion=()=>{
        var placa = document.getElementById("placa").value.ToUpperCase();
        var modelo = document.getElementById("modelo").value;
        var linea = document.getElementById("linea").value.ToUpperCase();
        var marca = document.getElementById("marca").value.ToUpperCase();
        var cedula = document.getElementById("cedula").value;
        var nombre = document.getElementById("nombre").value.ToUpperCase();
        var apellido = document.getElementById("apelldio").value.ToUpperCase();
        var direccion = document.getElementById("direccion").value.ToUpperCase();
        var celular = document.getElementById("celular").value;
        var correo = document.getElementById("correo").value.ToUpperCase();
        alert(placa +" "+ modelo+ " "+ linea+" "+marca+" "+cedula+" "+nombre+" "+apellido+" "+direccion+" "+celular+" "+correo);
    }
    validacionCedula(){
        var valor = document.getElementById("cedula").value;
        let cedulaER = /^[0-9]{8,10}$/;
        if(valor.length>=1){
            if(!cedulaER.test(valor)){
                alert("la cedula es un valor ente 8 y 10 digitos, sin '.' ni ','");
            }
        }
    }
    validacionCelular(){
        var valor = document.getElementById("celular").value;
        let celularER= /^[3][0][0-5]{1}[0-9]{7}|[3][1][0-9]{8}|[3][2][0-3]{1}[0-9]{7}|[3][5][0-1]{1}[0-9]{7}$/;
        if(valor.length>=1){    
            if(!celularER.test(valor)){
                alert("Numero incorrecto");
            }
        }
    }
    validacionPla(){
        var valor = document.getElementById("placa").value;
        let placaER = /^(([A-Za-z]{3})+([0-9]{2})+([A-Za-z]{1}))$/;
        if(valor.length>=1){
            if (!placaER.test(valor)){
                alert("Placa invalida");
            }
        }
    }
    validacionCorreo(){
        var valor = document.getElementById("correo").value;
        let placaER = /^[0-9a-z]{1,20}[.]{0,1}[0-9a-z]{1,20}[@]{1}([\w.-]+\.[a-z]{2,6})$/;
        if(valor.length>=1){
            if (!placaER.test(valor)){
                alert("Correo incorrecto");
            }
        }
    }   
    validacionMod(){
        var valor = document.getElementById("modelo").value;
        if( isNaN(valor)) {
            alert("No se aceptan letras")
        }else{
            var num=parseInt(valor, 10);
            var fecha = new Date();
            var anio = fecha.getFullYear();
            if(num <= 1969 || num >= anio+1){
                alert("El modelo debe estar entre 1970 y "+anio);
            }
        }
    }
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
                        
                    <div className="col-sm 6 mb-3 motocicleta">
                            <div className="row titulomotocicleta">
                                <h4>MOTOCICLETA</h4>
                            </div>
                            <div className="row  mb-3  cuadromotocicleta">
                                <form className="form-group">
                                    <div className="row justify-content-center">
                                        <div className="col-sm-8 mb-3">
                                            <input id="placa" className="form-control" type="text" placeholder="Placa" name="placa" onBlur={this.validacionPla}></input>
                                        </div>
                                        <div className="col-sm-2 mb-3">
                                            <button className="btn btn-primary btnmoto">Buscar</button>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="modelo" className="form-control" type="text" placeholder="Modelo" name="modelo" onBlur={this.validacionMod}></input>
                                            
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="marca" className="form-control" type="text" placeholder="Marca" name="marca"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="linea" className="form-control" type="text" placeholder="Linea" name="linea"></input>
                                        </div>  
                                  </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-sm 6 mb-3  cliente">
                            <div className="row titulocliente">
                                <h4>CLIENTE</h4>
                            </div>
                            <div className="row  mb-3  cuadrocliente">
                                <form className="form-group">
                                  <div className="row justify-content-center">
                                        <div className="col-sm-8 mb-3">
                                            <input id="cedula" className="form-control" type="text" placeholder="Cedula" name="cedula" onBlur={this.validacionCedula}></input>
                                        </div>
                                        <div className="col-sm-2 mb-3">
                                            <button className="btn btn-primary btncliente">Buscar</button>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="nombre" className="form-control" type="text" placeholder="Nombre" name="nombre"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="apellido" className="form-control" type="text" placeholder="Apellido" name="apellido"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input id="direccion" className="form-control" type="text" placeholder="Dirección" name="direccion"></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" id="celular" type="number" placeholder="Celular" name="celular" onBlur={this.validacionCelular}></input>
                                        </div>
                                        <div className="col-sm-8 mb-3">
                                            <input className="form-control" id="correo" type="text" placeholder="Correo" name="correo" onBlur={this.validacionCorreo}></input>
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
                                        <button onClick={this.peticion} className="btn btn-primary btnregistro">Registrar</button>
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