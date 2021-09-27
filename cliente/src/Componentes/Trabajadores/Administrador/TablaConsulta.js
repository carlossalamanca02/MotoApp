import React,{Component} from "react";
import { GrSearch } from "react-icons/gr";
import { BarraAdministrador } from ".";
import './GestionarServicios.css'
class TablaConsultas extends Component{
    render(){
        return(
            <>
                <BarraAdministrador/>
                <div className="container">
                    <div className="row titulo mb-3">
                        <div className="col-sm-1 iconoHistorial">
                            <GrSearch/>
                        </div>
                        <div className="col-sm-11">
                            <h1>CONSULTA</h1>
                        </div>
                    </div>
                    <div className="row tabla">
                        <table className="table">
                            <thead className="cabeceraTabla">
                                <tr>
                                    <th scope="col">Servicio</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Moto</th>
                                    <th scope="col">Fecha de ingreso</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Descripcipon</th>
                                    <th scope="col">Fecha de entrega</th>
                                    <th scope="col">Fecha de entrega</  th>
                                </tr>
                            </thead>
                            <tbody className="cuerpoTabla">
                                <tr>
                                    <th scope="row">codigo1</th>
                                    <td>cliente</td>
                                    <td>moto</td>
                                    <td className="ver">xxxxx</td>
                                    <td className="ver">xxxxxx</td>
                                    <td className="ver">xxxxxx</td>
                                    <td className="ver">xxxxxx</td>
                                    <td className="ver">xxxxxx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }


}
export default TablaConsultas;