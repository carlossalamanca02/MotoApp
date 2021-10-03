import React,{Component} from "react";
import { BarraMecanico } from ".";
import {FaTools } from 'react-icons/fa'
import {FcSearch} from 'react-icons/fc'
import { AiFillCloseCircle } from "react-icons/ai";
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap";
class BuscarServicios extends Component{

    state={
        buscar:false
    }

    salida=()=>{
        this.setState({buscar: !this.state.buscar})
    }
    render(){
        return(
            <>
            <BarraMecanico/>
            <div className="container">
                <div className="row titulo mb-3">
                    <div className="col-sm-1 iconoHistorial">
                        <FaTools/>
                    </div>
                    <div className="col-sm-11">
                        <h1>BUSCAR SERVICIO</h1>
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
                            </tr>
                        </thead>
                        <tbody className="cuerpoTabla">
                            <tr>
                                <th scope="row">codigo1</th>
                                <td>cliente</td>
                                <td>moto</td>
                                <td className="ver">
                                    <span onClick={this.salida}><FcSearch /></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={this.state.buscar}>
                <ModalHeader>
                    <div className="row">
                        <div className="col-sm-3 iconoBuscar">
                            <span onClick={this.salida}><AiFillCloseCircle/></span>
                        </div>
                        <div className="col-sm-8">
                            <h4>CONSULTAR</h4>
                        </div>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="row tabla">
                        <div className="col-sm-12">
                            <b>Cliente:</b><label name="cliente"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Placa:</b><label name="placa"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Descripción:</b><label name="Descrioción"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Mecanico:</b><label name="mecanico"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Fecha de ingreso:</b><label name="ingreso"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Estado:</b><label name="estado"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Ultima actualización:</b><label name="ultimafecha"></label>
                        </div>
                        <div className="col-sm-12">
                            <b>Evidencias:</b>
                            <div className="row">
                                <div className="col-sm-12">
                                    fotitos y eso
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}


}
export default BuscarServicios;