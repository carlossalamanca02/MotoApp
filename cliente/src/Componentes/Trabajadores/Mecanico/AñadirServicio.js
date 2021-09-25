import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BarraMecanico } from ".";
import { RegistrarServicio } from "..";



class AñadirServicio extends Component{
    render(){
        return(
            <>
                <BarraMecanico/>
                <RegistrarServicio/>
            </>
        );
    }
}
export default AñadirServicio;