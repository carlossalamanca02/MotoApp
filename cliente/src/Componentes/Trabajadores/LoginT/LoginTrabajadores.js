import React, {Component, useState} from "react";
import './LoginTrabajadores.css'
import { withRouter,Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import Mecanico from "../../hooks/mecanico";

class LoginTrabajadores extends Component{
    state={
        redirect: false,
        redirect2: false,
        error:false,
        vacio:false
    }
 
    alertaError = ()=>{
        Swal.fire("Datos incorrectos", "Verifique que los datos ingresados son correctos","error")   
   }
   alertaVacio = ()=>{
       Swal.fire("Campos vacios", "Ingrese todos los campos","warning")   
   }
   

}







export default function Login(){
    
    
    
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
                                <section className="form-group">
                                    <input id ="User" type="text" onChange={(e)=> setUser(e.target.value)} value={user} className="form-control form-control mb-3" placeholder="Usuario" name="usuario" />
                                    <input id="Pass" type="password" onChange={(e)=> setPass(e.target.value)} value={pass} className="form-control form-control mb-3" placeholder="Contraseña" name="contraseña"/>
                                    <button onClick={validate} className="btn btn-primary mb-3" id="ingresar">Ingresar</button>

                                </section>
                                <a>Cambiar contraseña</a>
                                <br></br>

                            </section>
                        }
                        {validatedata && <strong>Validando credenciales</strong>}
                        {errorlogin && <strong>Se presento un error</strong>}
                        </section>
                    </section>  
                </section>
               
            </section>
        </>  
    )
    
}


 

/*
class LoginTrabajadores extends Component{
   
    
    
    state={
        redirect: false,
        redirect2: false,
        error:false,
        vacio:false
    }
 
    alertaError = ()=>{
        Swal.fire("Datos incorrectos", "Verifique que los datos ingresados son correctos","error")   
   }
   alertaVacio = ()=>{
       Swal.fire("Campos vacios", "Ingrese todos los campos","warning")   
   }

   function Login(){
    
    
    
    const [user, setUser]=useState("");
    const [pass, setPass]=useState("");
    const {login,validatedata,errorlogin} = Mecanico()
    const validate = (e) =>{
        e.preventDefault();
        login(user,pass)
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
                                <section className="form-group">
                                    <input id ="User" type="text" onChange={(e)=> setUser(e.target.value)} value={user} className="form-control form-control mb-3" placeholder="Usuario" name="usuario" />
                                    <input id="Pass" type="password" onChange={(e)=> setPass(e.target.value)} value={pass} className="form-control form-control mb-3" placeholder="Contraseña" name="contraseña"/>
                                    <button onClick={validate} className="btn btn-primary mb-3" id="ingresar">Ingresar</button>

                                </section>
                                <a>Cambiar contraseña</a>
                                <br></br>

                            </section>
                        }
                        {validatedata && <strong>Validando credenciales</strong>}
                        {errorlogin && <strong>Se presento un error</strong>}
                        </section>
                    </section>  
                </section>
               
            </section>
        </>  
    )

    }





   
    peticion=()=>{
        var dat={"user": document.getElementById("User").value, "pass": document.getElementById("Pass").value}
        var user= document.getElementById("User").value
        var pass=document.getElementById("Pass").value
        var url='http://localhost:9000/logWorker'
        const {login} = Mecanico()
        login(user,pass)
    
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dat)
        })
        .then(response => response.json())
        .then(data => {
            if(data==1){
                this.setState({error:true})
            }else if(data.res==2){
                if (data.op==0){
                    this.setState({redirect2: true}) 
                }else if(data.op==1){
                    this.setState({redirect: true}) 
                }
            }else{
                this.setState({vacio:true})
            }

        })

        
    }
    

    render(){
        const {redirect}=this.state;
        const {redirect2}=this.state;
        const {error}=this.state;
        const {vacio}=this.state;
        if(redirect){
            return <Redirect to="/AñadirServicioMecanico"/>
        }else if(redirect2){
            return <Redirect to="/"/>
        }else if(error){
            this.alertaError();
        }else if(vacio){
            this.alertaVacio();
        }
        return(
            <section>
                <section className="container-fluid h-100 fondoT">
                    <section className="row justify-content-center h-100">
                        <section className="col-sm-4 align-self-center ">
                            <section className="contenedor">
                                <h3>INGRESAR</h3>
                                <p>Ingrese sus datos</p>
                                <section className="form-group">
                                    <input id ="User" type="text" className="form-control form-control mb-3" placeholder="Usuario" name="usuario" onChange={this.capturarCambios}/>
                                    <input id="Pass" type="password" className="form-control form-control mb-3" placeholder="Contraseña" name="contraseña" onChange={this.capturarCambios}/>
                                    <button onClick={this.peticion} className="btn btn-primary mb-3" id="ingresar">Ingresar</button>
                                </section>
                                <a>Cambiar contraseña</a>
                            </section>
                        </section>
                    </section>  
                </section>
            </section>
        )
    }

}
export default LoginTrabajadores;

*/