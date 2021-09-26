import React,{Component} from "react";
import { BarraAdministrador } from ".";
import {FaTools } from 'react-icons/fa'
import {FcSearch} from 'react-icons/fc'
import { GrUpdate } from "react-icons/gr";
import './GestionarServicios.css'
import { AiFillDelete } from "react-icons/ai";
class GestionarServicios extends Component{
    render(){
        return(
            <>
                <BarraAdministrador/>
                <div className="container">
                    <div className="row titulo mb-3">
                        <div className="col-sm-1 iconoHistorial">
                            <FaTools/>
                        </div>
                        <div className="col-sm-11">
                            <h1>GESTIÓN DE SERVICIOS</h1>

                        </div>
                    </div>
                    <div className="row tabla">
                        <table className="table">
                            <thead className="cabeceraTabla">
                                <tr>
                                <th scope="col">Servicio</th>
                                <th scope="col">Cliente</th>
                                <th scope="col">Moto</th>
                                <th scope="col">Consultar</th>
                                <th scope="col">Actualizar</th>
                                <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody className="cuerpoTabla">
                                <tr>
                                    <th scope="row">codigo1</th>
                                    <td>cliente</td>
                                    <td>moto</td>
                                    <td className="ver"><FcSearch/></td>
                                    <td className="ver"><GrUpdate/></td>
                                    <td className="ver"><AiFillDelete/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }


}
export default GestionarServicios;