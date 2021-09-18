import React, { Component } from "react";
import ActualizarServicio from "../Comun/ActualizarServicio";
import { BarraMecanico } from ".";

class ActualizarServicioM extends Component{
    render(){
        return(
            <>
                <BarraMecanico/>
                <ActualizarServicio/>
            </>

        );
    }

}
export default ActualizarServicioM;