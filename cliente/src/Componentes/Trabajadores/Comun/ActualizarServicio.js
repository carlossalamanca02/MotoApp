import React,{Component} from "react";
import {GrDocumentUpdate } from 'react-icons/gr'
import './Servicio.css'
import 'bootstrap/dist/css/bootstrap.min.css'

class ActualizarServicio extends Component{
    render(){
        return(
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
                                    <th scope="col">Cliente</th>
                                    </tr>
                                </thead>
                                <tbody className="cuerpoTabla">
                                    <tr>
                                        <th scope="row">Placa</th>
                                        <td>cliente</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-sm-6">
                            <form action="http://localhost:9000/sendfile" method="post" encType="multipart/form-data"  className="form-group">
                                <div className="row">
                                    <div className="col-sm-8 mb-3">
                                        <select className="form-control" name="placa">
                                            <option>Seleccione</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Fotos o videos</label>
                                        <input multiple="multiple" type="file" className="form-control-file" name="files" id="archivo"></input>
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Descripción</label>
                                        <textarea className="form-control" name="description"></textarea>
                                        
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <label for="exampleFormControlFile1">Estado</label>
                                        <select className="form-control" name="estado">
                                            <option>En proceso</option>
                                            <option>Finalizado</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-8 mb-3">
                                        <button className="btn btn-primary btnmoto" type="submit">Actualizar</button>
                                    </div>
                                </div>

                            </form>
                        </div>         
                    </div>
                </div>
        );
    }

}
export default ActualizarServicio;