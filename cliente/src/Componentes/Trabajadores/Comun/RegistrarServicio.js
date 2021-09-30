import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {AiFillFileAdd } from 'react-icons/ai'
import './Servicio.css'
import Swal from 'sweetalert2'

class RegistrarServicio extends Component{
    state ={
        cedulaAdvertencia:false,
        cedulaError:false,
        placa:false,
        correo:false,
        advertenciamodelo1:false,
        advertenciamodelo2:false
    }

    advertenciaCedula = ()=>{
        Swal.fire("Cedula", "la cedula es un valor ente 8 y 10 digitos, sin puntos ni comas","warning")   
    }
    alertaCedula = ()=>{
        Swal.fire("Campo incorrecto","Número de cedula invalido","error")   
    }
    alertaPlaca = ()=>{
        Swal.fire("Campo incorrecto","La placa no es valida","error")   
    }
    alertaCorreo = ()=>{
        Swal.fire("Campo incorrecto","El correo ingresado no es valido","error")   
    }
    advertenciaModeloLetras = ()=>{
        Swal.fire("Modelo","El modelo no acepta letras","Warning")   
    }
    advertenciaModeloaño = ()=>{
        var anio = fecha.getFullYear();
        var fecha = new Date();
        Swal.fire("Modelo","El modelo debe estar entre 1970 y "+anio,"Warning")   
    }

    
    validacionCedula=()=>{
        var valor = document.getElementById("cedula").value;
        let cedulaER = /^[0-9]{8,10}$/;
        if(valor.length>=1){
            if(!cedulaER.test(valor)){
                this.setState({advertenciaCedula:true});
            }
        }
    }
    validacionCelular=()=>{
        var valor = document.getElementById("celular").value;
        let celularER= /^[3][0][0-5]{1}[0-9]{7}|[3][1][0-9]{8}|[3][2][0-3]{1}[0-9]{7}|[3][5][0-1]{1}[0-9]{7}$/;
        if(valor.length>=1){    
            if(!celularER.test(valor)){
                this.setState({cedulaError:true});
            }
        }
    }
    validacionPla=()=>{
        var valor = document.getElementById("placa").value;
        let placaER = /^(([A-Za-z]{3})+([0-9]{2})+([A-Za-z]{1}))$/;
        if(valor.length>=1){
            if (!placaER.test(valor)){
                this.setState({placa:true});
            }
        }
        var placajs={placa:valor}
        var url='http://localhost:9000/serchdata'
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(placajs)
        })
        .then(response => response.json())
        .then(data => {
            if(data.moto != null){
                document.getElementById("modelo").value=data.moto.nombre
                document.getElementById("marca").value=data.moto.marca
                document.getElementById("linea").value=data.moto.linea
                document.getElementById("cedula").value=data.cliente.cedula
                document.getElementById("nombre").value=data.cliente.nombre
                document.getElementById("apellido").value=data.cliente.apellido
                document.getElementById("direccion").value=data.cliente.dirrecion
                document.getElementById("celular").value=data.cliente.celular
                document.getElementById("correo").value=data.cliente.correo
            }
        })
        
        
    }
    validacionCorreo=()=>{
        var valor = document.getElementById("correo").value;
        let placaER = /^[0-9a-z]{1,20}[.]{0,1}[0-9a-z]{1,20}[@]{1}([\w.-]+\.[a-z]{2,6})$/;
        if(valor.length>=1){
            if (!placaER.test(valor)){
                this.setState({correo:true});
            }
        }
    }   
    validacionMod=()=>{
        var valor = document.getElementById("modelo").value;
        if( isNaN(valor)) {
            this.setState({advertenciamodelo1:true});
        }else{
            var num=parseInt(valor, 10);
            var fecha = new Date();
            var anio = fecha.getFullYear();
            if(num <= 1969 || num >= anio+1){
                this.setState({advertenciamodelo2:true});
            }
        }
    }
    peticion=()=>{
        var placa = document.getElementById("placa").value.toUpperCase();
        var modelo = document.getElementById("modelo").value;
        var linea = document.getElementById("linea").value.toUpperCase();
        var marca = document.getElementById("marca").value.toUpperCase();
        var cedula = document.getElementById("cedula").value;
        var nombre = document.getElementById("nombre").value.toUpperCase();
        var apellido = document.getElementById("apellido").value.toUpperCase();
        var direccion = document.getElementById("direccion").value.toUpperCase();
        var celular = document.getElementById("celular").value;
        var correo = document.getElementById("correo").value;
        var servicio = document.getElementById("servicio").value
        var fecha = document.getElementById("fecha").value
        var descripcion = document.getElementById("descripcion").value
        alert(placa +" "+ modelo+ " "+ linea+" "+marca+" "+cedula+" "+nombre+" "+apellido+" "+direccion+" "+celular+" "+correo+" "+servicio+" "+fecha+" "+descripcion);
        var data={placa:placa,modelo:modelo,marca:marca,linea:linea,cedula:cedula,nombre:nombre,apellido:apellido,direccion:direccion,celular:celular,correo:correo,servicio:servicio,fecha:fecha,descripcion:descripcion}
        var url='http://localhost:9000/addservice'
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if(data.res != null){
                alert(data.res)
            }else{
                alert("Error")
            }
        })
      
    }


    render(){
        const {advertenciaCedula}=this.state;
        const {cedulaError}=this.state;
        const {placa}=this.state;
        const {correo}=this.state;
        const {advertenciamodelo1}=this.state;
        const {advertenciamodelo2}=this.state;
        if(advertenciaCedula){
            this.advertenciaCedula()
        }else if(cedulaError){
            this.alertaCedula();
        }else if(placa){
            this.alertaPlaca();
        }else if(correo){
            this.alertaCorreo();
        }else if(advertenciamodelo1){
            this.advertenciaModeloLetras();
        }else if(advertenciamodelo2){
            this.advertenciaModeloaño();
        }
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
                            
                                <div className="row justify-content-center">
                                    <div className="col-sm-6 mb-3">
                                        <label>Tipo de servicio</label>
                                        <select id="servicio" className="form-control" type="text"  name="tiposervicio">
                                            <option>Tipo de servicio...</option>
                                            <option>Reparacion</option>
                                            <option>Mantenimiento</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <label for="marca">Fecha de ingreso</label>
                                        <input id="fecha" className="form-control" type="date" placeholder="Marca" name="marca"></input>
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <textarea id="descripcion" className="form-control" type="text" placeholder="Descripcion" name="nombre"></textarea>
                                    </div>
                                    <div className="col-sm-6 mb-3 align-self-end">
                                        <button onClick={this.peticion} className="btn btn-primary btnregistro">Registrar</button>
                                    </div>
                                  </div>
                            
                        </div>

                    </div>
                </div>
            </>
        );
    }
}
export default RegistrarServicio;