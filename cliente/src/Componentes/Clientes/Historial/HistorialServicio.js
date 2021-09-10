import React, {Component} from "react";
import { Barra } from '../../Clientes'
import { TablasHistorial } from '../../Clientes'
import 'bootstrap/dist/css/bootstrap.min.css'


class HistorialServicio extends Component{
    render(){
        return(
           <section className="container">
               <section className="row">
                   <section className="col-sm-2">
                        <Barra/>
                   </section>
                   <section className="col-sm-10">
                       
                   </section>

               </section>
            
           </section>


        );
    }
}
export default HistorialServicio;