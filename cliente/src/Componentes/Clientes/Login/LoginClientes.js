import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginClientes.css'
import { Redirect } from "react-router";

class LoginClientes extends Component{
    /*state={
        form:{
            cedula:'',
            placa:''
        }

    }*/
    state={redirect:false}


    capturarCambios=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    peticion = () => {
        var dat={"cedula": document.getElementById("Id").value, "placa": document.getElementById("Placa").value}
        var url='http://localhost:9000/logCustomer'
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(dat)
        })
        .then(response => response.json())
        .then(data => {
            if(data==1){
                alert("cedula y/o placa mal")
            }else if(data==2){
                this.setState({redirect: true}) 
            }else{
                alert("campos vacios")
            }

        })        
    }
    render(){
        const {redirect}=this.state;
        if(redirect){
            return <Redirect to="/AñadirServicioMecanico"/>
        }
        return(
            <section className="container-fluid h-100 fondoC">
                <section className="row justify-content-center h-100">
                    <section className="col-sm-4 align-self-center ">
                        <section className="contenedor">
                            <h3>INGRESAR</h3>
                            <p>Ingrese sus datos</p>
                            <section className="form-group">
                                <input id= "Id" type="text" className="form-control form-control mb-3" placeholder="Cedula" name="cedula" onChange={this.capturarCambios}/>
                                <input id="Placa" type="password" className="form-control form-control mb-3" placeholder="Placa" name="placa" onChange={this.capturarCambios}/>
                                <button onClick={this.peticion} className="btn btn-primary" id="ingresar">Ingresar</button>
                            </section>
                        </section>
                    </section>
                </section>  
             </section>
        )
                  
    }
}

export default LoginClientes;