import React, {Component,useState} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Barra} from '../../Clientes'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaMotorcycle } from 'react-icons/fa'
import './EstadoServicio.css'


function EstadoServicio(){
    const [state, setstate]=useState({imagenes:[]})
    const [state2, setstate2]=useState({informacion:[]})
    var url= 'http://localhost:9000/estateservice'
    var token= window.sessionStorage.getItem('jwt')
    if(state2.informacion == 0){

        fetch(url,{
            method:'get',
            headers:{'Content-Type':'application/json','x-access-token':token},
        }).then(response => response.json())
        .then(data => {    
            setstate2({informacion:data.actualizaciones})
        }).catch(err=>{
            

        })   
    }
    
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
                {console.log(state2.informacion)}
                <div className="row contenedorp">
                    <div className="col-sm 6 mb-3  actual">
                        <div className="row tituloactual">
                            <h4>ESTADO ACTUAL DE LA MOTOCICLETA</h4>
                        </div>
                        <div className="row  mb-3  cuadro">
                            <div className="col-sm-12  estado">
                            {state2.informacion[0] !=null ?
                                <p className="infoestado">{state2.informacion[0].estado}</p>
                            : 
                                <p>No hay un estado registrado</p>
                            }                           
                            </div>
                        </div>

                    </div>
                    <div className="col-sm 6 mb-3 actualizacion">
                        <div className="row tituloactualización">
                            <h4>ULTIMA FECHA DE ACTUALIZACION</h4>
                        </div>
                        <div className="row  mb-3  cuadroactualización">
                            <div className="col-sm-12  fecha">
                                {state2.informacion[0] !=null ?
                                    <p className="infofecha">{state2.informacion[0].fecha_actualizacion.substring(0,10)}</p>
                                : 
                                    <p>No hay una fecha registrada</p>
                                }   
                            </div>
                        </div>
                    </div>
                    <div className= "row">
                    
                        {state2.informacion.map((x)=>(
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header">
                                        {x.descripcion != '' ?
                                        <p>{x.descripcion}</p>
                                        :<p>No hay una descripcion registrada</p>}
                                    </div>
                                    <div className="card-body">
                                        {x.multimedia != null &&
                                            <img  src={"http://localhost:9000/"+x.multimedia}></img>
                                        }
                                    </div>
                                </div>
                            </div>                            
                        ))}
                    </div>

                    
                   
            </div>
        </div>
        
        </>
    );

}
export default EstadoServicio;

