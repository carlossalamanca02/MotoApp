import React, {Component,useState} from "react";
import { TablasHistorial, Barra} from '../../Clientes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VscPreview } from 'react-icons/vsc'
import './HistorialServicios.css'

function HistorialServicio(){
    const [state, setstate]=useState({informacion:[]})
    var url= 'http://localhost:9000/infoserviceclient'
    var token= window.sessionStorage.getItem('jwt')
    
    if(state.informacion == 0){
        fetch(url,{
            method:'get',
            headers:{'Content-Type':'application/json','x-access-token':token},
        }).then(response => response.json())
        .then(data => {
            setstate({informacion:data.data})
        }).catch(err=>{
            alert("Se presento un error")
        })
    }
    
    
    return(
        <>
            < Barra />
            <div className="container">
                <div className="row titulo mb-3">
                    <div className="col-sm-1 iconoHistorial">
                        <VscPreview/>
                    </div>
                    <div className="col-sm-11">
                        <h1>HISTORIAL DE SERVICIO</h1>

                    </div>
                </div>
                <div className="row tabla">
                    <table className="table">
                        <thead className="cabeceraTabla">
                            <tr>
                            <th scope="col">Servicio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Fecha de ingreso</th>
                            <th scope="col">Fecha de entrega</th>
                            <th scope="col">Mecanico encargado</th>

                            </tr>
                        </thead>
                        <tbody className="cuerpoTabla">
                            
                            {!state.informacion ?
                               <p>No hay servicios registrados</p>
                            :state.informacion.map((x)=>(
                                <tr>
                                    {x.id_tiposervicio == "101"?
                                        <th scope="row">Reparacion</th>
                                    :<th scope="row">Mantenimiento</th>}
                                    <th>{x.descripcion}</th>
                                    <th>{x.fechaingreso.substring(0,10)}</th>
                                    <th>{x.fechaEntrega}</th>
                                    <th>{x.nombre +" "+x.apellido}</th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    
                </div>
            </div>
        </>
    );
}
export default HistorialServicio;
