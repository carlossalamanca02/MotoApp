import React, {Component} from "react";
import { TablasHistorial, Barra} from '../../Clientes'
import 'bootstrap/dist/css/bootstrap.min.css'
import { VscPreview } from 'react-icons/vsc'
import './HistorialServicios.css'

class HistorialServicio extends Component{
    render(){
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
                                </tr>
                            </thead>
                            <tbody className="cuerpoTabla">
                                <tr>
                                    <th scope="row">codigo1</th>
                                    <td>des1</td>
                                    <td>fecha1</td>
                                    <td>fecha2</td>
                                </tr>
                            </tbody>

                        </table>
                        
                    </div>
                </div>
            </>
        );
    }
}
export default HistorialServicio;