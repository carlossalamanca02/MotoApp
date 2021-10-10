import React, {Component, useState} from "react";
import './LoginTrabajadores.css'
import { withRouter,Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import Mecanico from "../../hooks/mecanico";
import { GiSwallow } from "react-icons/gi";

class LoginTrabajadores extends Component{
    state={
        redirect: false,
        redirect2: false,
        error:false,
        vacio:false
    }

}

export default function Login(){

    const [error,setError]=useState(false);
    const [user, setUser]=useState("");
    const [pass, setPass]=useState("");
    const {isAdmin,logged,login,validatedata,errorlogin} = Mecanico()
    const validate = (e) =>{
        e.preventDefault();
        login(user,pass)
    }
    if(logged){
        console.log(isAdmin)
        if (isAdmin){
            window.location.href='http://localhost:3000/AgregarServicioA'
        }else{
            window.location.href='http://localhost:3000/AñadirServicioMecanico'
        }
            
    }
    const alertaError = ()=>{
        Swal.fire({
            title: "DATOS INCORRECTOS",
            text: "Los datos ingresados no son correctos",
            icon: "warning",
            allowOutsideClick: true,
            stopKeydownPropagation:true
        });
    }
    const alertavalidar = ()=>{
        Swal.fire({
            title: "Validando credenciales",
            allowOutsideClick: true,
            stopKeydownPropagation:true,
            showConfirmButton:false
            
        });
    }
    return(   
        <>
        <section>
                <section className="container-fluid h-100 fondoT">
                    <section className="row justify-content-center h-100">
                        <section className="col-sm-4 align-self-center ">
                        {!validatedata &&
                            <section className="contenedor">
                                <h3>INGRESAR</h3>
                                <p>Ingrese sus datos</p>
                                <p className="errorLogin">
                                     {errorlogin && <strong>El usuario o la constraseña no son correctos</strong>}
                                </p>
                                <section className="form-group">
                                    <input id ="User" type="text" onChange={(e)=> setUser(e.target.value)} value={user} className="form-control form-control mb-3" placeholder="Usuario" name="usuario" />
                                    <input id="Pass" type="password" onChange={(e)=> setPass(e.target.value)} value={pass} className="form-control form-control mb-3" placeholder="Contraseña" name="contraseña"/>
                                    <button onClick={validate} className="btn btn-primary mb-3" id="ingresar">Ingresar</button>
                                </section>
                                <a>Cambiar contraseña</a>
                                <br></br>
                            </section>
                        }
                        {validatedata && alertavalidar()}
                        
                        </section>
                    </section>  
                </section>    
            </section>
        </>  
    )
    
}


 

