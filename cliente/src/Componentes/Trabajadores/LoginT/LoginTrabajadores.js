import React, {Component} from "react";
import './LoginTrabajadores.css'

class LoginTrabajadores extends Component{
    state={
        form:{
            usuario:'',
            contraseña:''
        }
    }
    /*
    capturarCambios=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    */
    peticion(){
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
            }else if(data==2){
                alert("correcto")
            }else{
                alert("campos vacios")
            }

        })
    

    }
    render(){
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