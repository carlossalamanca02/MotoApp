import React, {Component} from "react";
import './LoginTrabajadores.css'

class LoginTrabajadores extends Component{
    state={
        form:{
            usuario:'',
            contraseña:''
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
            <section>
                <section className="container-fluid h-100 fondoT">
                    <section className="row justify-content-center h-100">
                        <section className="col-sm-4 align-self-center ">
                            <section className="contenedor">
                                <h3>INGRESAR</h3>
                                <p>Ingrese sus datos</p>
                                <section className="form-group">
                                    <input type="text" className="form-control form-control mb-3" placeholder="Usuario" name="usuario" onChange={this.capturarCambios}/>
                                    <input type="password" className="form-control form-control mb-3" placeholder="Contraseña" name="contraseña" onChange={this.capturarCambios}/>
                                    <button className="btn btn-primary mb-3" id="ingresar">Ingresar</button>
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