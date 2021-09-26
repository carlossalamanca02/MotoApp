import React, {Component} from "react";
import './Servicio.css'
import { Button, Modal, ModalBody, ModalHeader} from "reactstrap";
class ModalCOnsultar extends Component{
    render(){
        return(
            <>
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