import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoginClientes.css'

class LoginClientes extends Component{
    state={
        form:{
            cedula:'',
            placa:''
        }
    }
    capturarCambios=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }
    render(){
        return(
            <section className="container-fluid h-100 fondoC">
                <section className="row justify-content-center h-100">
                    <section className="col-sm-4 align-self-center ">
                        <section className="contenedor">
                            <h3>INGRESAR</h3>
                            <p>Ingrese sus datos</p>
                            <section className="form-group">
                                <input type="text" className="form-control form-control mb-3" placeholder="Cedula" name="cedula" onChange={this.capturarCambios}/>
                                <input type="password" className="form-control form-control mb-3" placeholder="Placa" name="placa" onChange={this.capturarCambios}/>
                                <button className="btn btn-primary" id="ingresar">Ingresar</button>
                            </section>
                        </section>
                    </section>
                </section>  
             </section>
        )
                  
    }
}

export default LoginClientes;