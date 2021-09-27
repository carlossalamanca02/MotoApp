import React, {Component} from "react";
import './LoginTrabajadores.css'
import { withRouter,Redirect } from 'react-router-dom';
class LoginTrabajadores extends Component{
    state={
        redirect: false,
        redirect2: false
    }
 
    peticion=()=>{
        var dat={"user": document.getElementById("User").value, "pass": document.getElementById("Pass").value}
        var url='http://localhost:9000/logWorker'
       
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dat)
        })
        .then(response => response.json())
        .then(data => {
            if(data==1){
                alert("contraseña y/o usuarios mal")
            }else if(data.res==2){
                if (data.op==0){
                    this.setState({redirect2: true}) 
                }else if(data.op==1){
                    this.setState({redirect: true}) 
                }
            }else{
                alert("campos vacios")
            }

        })
    }

    render(){
        const {redirect}=this.state;
        const {redirect2}=this.state;
        if(redirect){
            return <Redirect to="/AñadirServicioMecanico"/>
        }else if(redirect2){
            return <Redirect to="/"/>
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