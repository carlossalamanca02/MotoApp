import React,{Component} from "react";
import {GrDocumentUpdate } from 'react-icons/gr'
import './Servicio.css'
class ActualizarServicio extends Component{
    render(){
        return(
            <div className="container">
                    <div className="row titulo mb-3">
                        <div className="col-sm-1 iconoActualizar">
                            <GrDocumentUpdate/>
                        </div>
                        <div className="col-sm-11">
                            <h1>ACTUALIZAR SERVICIO</h1>
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
                            <form className="form-group">
                                <div className="row">
                                    <div className="col-sm-8">
                                        <select className="form-group">
                                            <option>Motocicleta</option>
                                            

                                        </select>

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