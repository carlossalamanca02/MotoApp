import React,{useState} from "react";
import { BarraAdministrador } from ".";
import {FaTools } from 'react-icons/fa'
import {FcSearch} from 'react-icons/fc'
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete, AiFillCloseCircle} from "react-icons/ai";
import { Modal, ModalBody, ModalHeader} from "reactstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import './GestionarServicios.js'


/*class GestionarServicios extends Component{

    state={buscar:false}

    alertaEliminar =()=>{
        Swal.fire({
            title: "Eliminar",
            text:"¿Está seguro de eliminar este elemento?",
            icon: "question",

            allowOutsideClick:true,
            showConfirmButton:true,
            showCancelButton:true,
            confirmButtonText:"Si",
            confirmButtonColor:"#BA001F",
            cancelButtonText:"No",
            cancelButtonColor:"#BA001F",
            preConfirm: function eliminaRegistro() {
                //Aca pos pones la la petición pa eliminar :3 
                //si si pos que muestre esto
                Swal.fire("Registro eliminado","El registro se ha eliminado correctamente","success")
                //Si falla se pone esto
                Swal.fire("Error","No fue posible eliminar el registro","error")
            }
        })
    }

    mostrarModal=()=>{
        this.setState({buscar: !this.state.buscar})
    }
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
                                    <td className="ver"><span onClick={this.mostrarModal}><FcSearch/></span></td>
                                    <td className="ver">
                                        <Link to="/AñadirProgresoA">
                                            <GrUpdate/>
                                        </Link>
                                    </td>
                                    <td className="ver"><span onClick={this.alertaEliminar}><AiFillDelete/></span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <Modal isOpen={this.state.buscar}>
                <ModalHeader>
                    <div className="row">
                        <div className="col-sm-3 iconoBuscar">
                            <span onClick={this.mostrarModal}><AiFillCloseCircle/></span>
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


}*/

function GestionarServicios(){
    const [state, setstate]=useState({buscar:false,placas:[]})
    const [state2,setstate2]=useState({buscar2:false})
    const [state3,setstate3]=useState({dataserh:[],lis:[]})
    var url= 'http://localhost:9000/listallservices'
    var token= window.sessionStorage.getItem('jwt')
    if(state.placas == 0){
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token},
        }).then(response => response.json())
        .then(data => {
            setstate({placas:data.placas})
        }).catch(err=>{
            Swal.fire("Error en el servidor","Se presentó un error con la base de datos, espere un momento mientras se soluciona", "error")
        })
    }
    const alertaEliminar =(placa)=>{
        Swal.fire({
            title: "Eliminar",
            text:"¿Está seguro de eliminar este elemento?",
            icon: "question",

            allowOutsideClick:true,
            showConfirmButton:true,
            showCancelButton:true,
            confirmButtonText:"Si",
            confirmButtonColor:"#BA001F",
            cancelButtonText:"No",
            cancelButtonColor:"#BA001F",
            preConfirm: function eliminaRegistro() {
                var url3= 'http://localhost:9000/deleteservices'
                var bodyPlaca= {placa};
                fetch(url3,{
                    method:'post',
                    headers:{'Content-Type':'application/json','x-access-token':token},
                    body:JSON.stringify(bodyPlaca)
                }).then(response => response.json())
                .then(data => {
                    if(data[0].res=="1"){
                        Swal.fire("Registro eliminado","El registro se ha eliminado correctamente","success")
                    }
                }).catch(err=>{
                        Swal.fire("Error en el servidor","Se presentó un error con la base de datos, espere un momento mientras se soluciona", "error")
                })
                
                //Si falla se pone esto
            }
        })
    }
    
    const showModal=(placa,nombre,apellido,descripcion)=>{
        setstate2({buscar2:true})
        var url2='http://localhost:9000/listallclients'
        var bodydata={placa:placa,descripcion:descripcion,nombre:nombre,apellido:apellido}
        fetch(url2,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token},
            body:JSON.stringify(bodydata)
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            setstate3({dataserh:data.info,lis:data.lis})
        }).catch(err=>{
            Swal.fire("Error en el servidor","Se presentó un error con la base de datos, espere un momento mientras se soluciona", "error")
        })
    }

    const closeModal=()=>{
        setstate2({buscar2:false})
    }
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
                            <th scope="col">Placa</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Consultar</th>
                            <th scope="col">Actualizar</th>
                            <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                        <tbody className="cuerpoTabla">
                            {state.placas.map((x)=>(
                            <tr>
                                <th scope="row">{x.placa}</th>
                                <td>{x.nombre+" "+x.apellido}</td>
                                <td>{x.descripcion}</td>
                                <td className="ver"><span onClick={()=>showModal(x.placa, x.nombre, x.apellido,x.descripcion)}><FcSearch /></span></td>
                                <td className="ver">
                                    <Link to="/AñadirProgresoA">
                                        <GrUpdate/>
                                    </Link>
                                </td>
                                <td className="ver"><span onClick={()=>alertaEliminar(x.placa)}><AiFillDelete/></span></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={state2.buscar2}>
            <ModalHeader>
                <div className="row">
                    <div className="col-sm-3 iconoBuscar">
                        <span onClick={closeModal}><AiFillCloseCircle/></span>
                    </div>
                    <div className="col-sm-8">
                        <h4>CONSULTAR</h4>
                    </div>
                </div>
            </ModalHeader>
                <ModalBody>
                    <div className="row tabla">
                        <div className="col-sm-12">
                            <b>Cliente:</b><label name="cliente">{state3.lis.nombre+" "+state3.lis.apellido}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Placa:</b><label name="placa">{state3.lis.placa}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Descripción:</b><label name="Descripción">{state3.lis.descripcion}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Mecanico:</b><label name="mecanico">{state3.dataserh.Id_trabajador}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Fecha de ingreso:</b><label name="ingreso">{state3.dataserh.fechaingreso}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Estado:</b><label name="estado">{state3.dataserh.estado}</label>
                        </div>
                        <div className="col-sm-12">
                            <b>Ultima actualización:</b><label name="ultimafecha">{state3.dataserh.fecha_actualizacion}</label>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );

}
export default GestionarServicios;