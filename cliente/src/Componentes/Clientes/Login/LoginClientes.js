import React, {useContext, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginClientes.css'
import { Redirect } from "react-router";
import Swal from 'sweetalert2';
import context from "../../contextos/mecanico";



export default function LoginClientes(){
    const{jwt,setjwt} = useContext(context)
    const[redirect,setredirect]=useState(false)
    const[error,seterror]=useState(false)
    const[vacio,setvacio]=useState(false)
    const alertaError = ()=>{
        Swal.fire("Datos incorrectos", "La cedula o la placa no son correctos","error")   
    }
    const alertaVacio = ()=>{
       Swal.fire("Campos vacios", "Ingrese todos los campos","warning")   
    }

    
    const peticion = () => {
        var dat={"cedula": document.getElementById("Id").value, "placa": document.getElementById("Placa").value}
        var url='http://localhost:9000/logCustomer'
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dat)
        })
        .then(response => response.json())
        .then(data => {
            
            if(data.op==1){
                seterror(true)
            }else if(data.op==2){
                setredirect(true)
                window.sessionStorage.setItem('jwt',data.token.toString())
                setjwt(data.token.toString())
            }else{
                setvacio(true)
            }

        })    
  
    }
    
    if(redirect){
        return <Redirect to="/HistorialServicio"/>
    }else if(error){
        alertaError();
    }else if(vacio){
        alertaVacio();
    }
    
    return(
        <>
        <section className="container-fluid h-100 fondoC">
            <section className="row justify-content-center h-100">
                <section className="col-sm-4 align-self-center ">
                    <section className="contenedor">
                        <h3>INGRESAR</h3>
                        <p>Ingrese sus datos</p>
                        <section className="form-group">
                            <input id= "Id" type="text" className="form-control form-control mb-3" placeholder="Cedula" name="cedula"/>
                            <input id="Placa" type="password" className="form-control form-control mb-3" placeholder="Placa" name="placa"/>     
                            <button onClick={peticion} className="btn btn-primary" id="ingresar">Ingresar</button>
                        </section>
                    </section>
                </section>
            </section>  
        </section>
        </>
    )
}





