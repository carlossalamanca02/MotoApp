import React,{Component} from "react";
import { BarraAdministrador } from ".";
import { RegistrarServicio } from "..";

class AgregarServicios extends Component{
    render(){
        return(
            <>
                <BarraAdministrador/>
                <RegistrarServicio/>
            </>

        );
    }
}
export default AgregarServicios;