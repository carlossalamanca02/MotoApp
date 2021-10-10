import React,{Component, useState} from "react";
import {GrDocumentUpdate } from 'react-icons/gr'
import './Servicio.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

function ActualizarServicio(){
    
    var url='http://localhost:9000/activeservices'
    var token= window.sessionStorage.getItem('jwt')
    const [state,setstate]=useState({data:[]})
    if(state.data.length == 0){
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token},
        }).then(response => response.json())
        .then(data => {
            setstate({data:data})
        }).catch(err=>{
            Swal.fire("Error en el servidor","Se presentó un error con la base de datos, espere un momento mientras se soluciona", "error")
        })
    }
    
    const peticion = (e)=>{
        var url='http://localhost:9000/sendfile'
        var formul= document.getElementById("formulario")
        const info= new FormData(formul);
        fetch(url,{
            method:'post',
            headers:{'x-access-token':token},
            body:info,
        }).then(res => res.json())
        .then(data => {
            console.log(data.res)
            Swal.fire(data.msg, null, "success")

            //setstate({placas:data.placas})
        }).catch(err=>{
            Swal.fire("Error en el servidor","Se presentó un error con la base de datos, espere un momento mientras se soluciona", "error")
        })
        
        
        
        
        
        /*
        .then(res => {
            if(!res.ok) {
                alert("error")
            }else{
                alert("todo bien")
            }
        })
        */
    }

    return(
        <>
            <div className="container">
                    <div className="row titulor mb-3">
                        <div className="col-sm-1 iconoActualizar">
                            <GrDocumentUpdate/>
                        </div>
                        <div className="col-sm-11">
                            <h1>AÑADIR PROGRESO DEL SERVICIO</h1>
                        </div>
                    </div>
                    <div className="row contenedorprincipal">
                        <div className="col-sm-6">
                            <table className="table">
                                <thead className="cabeceraTabla">
                                    <tr>
                                    <th scope="col">Motocicleta</th>
                                    <th scope="col">Descripcion</th>
                                    </tr>
                                </thead>
                                <tbody className="cuerpoTabla">
                                    {state.data.map((x)=>(
                                        <tr>
                                            <th scope="row">{x.id_moto}</th>
                                            <th>{x.descripcion}</th>
                                        </tr>
                                    ))}
                                        
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-6">
                        <form id="formulario" className="form-group">            
                                <div className="row">
                                    <div className="col-sm-8 mb-3">
                                        <select className="form-control" id="placa" name="placa">
                                        {state.data.map((x)=>(
                                            <option value={x.id_moto}>{x.id_moto}</option>
                                        ))}
                                        </select>
                                    </div>
                                    
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Descripción</label>
                                        <textarea className="form-control" id="descripcion" name="description"></textarea>
                                        
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Estado</label>
                                        <select className="form-control" id="estado" name="estado">
                                            <option value="0">En proceso</option>
                                            <option value="1">Finalizado</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Fotos o videos</label>
                                        <input accept =".mp4,.jpg,.jpeg,.png"multiple="multiple" type="file" className="form-control-file" name="files" id="archivo"></input>
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <button  onClick={peticion} className="btn btn-primary btnmoto" >Actualizar</button>
                                    </div>
                                </div>
                            </form>
                        </div>         
                    </div>
                </div>
            </>
        );
}
export default ActualizarServicio;