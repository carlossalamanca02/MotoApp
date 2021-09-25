import React, {Component} from 'react';
import { BarraAdministrador } from ".";
import ActualizarServicio from '../Comun/ActualizarServicio';

class AñadirProgreso extends Component{
    render(){
        return(
            <>
                <BarraAdministrador/>
                <ActualizarServicio/>
            </>
        );
        
    }

}
export default AñadirProgreso;