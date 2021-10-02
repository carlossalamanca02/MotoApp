import React, {useState} from "react";
import './BarraAdministrador.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { itemsAdministrador, itemsMecanico } from "./itemsAdministrador";
import { FaBars, FaUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Mecanico from "../../../hooks/mecanico";
function BarraAdministrador(){
    const [desplegable,setDesplegable] = useState(false);
    const mostrarDesplegable = () => setDesplegable(!desplegable);
    const [state,setstate]=useState({cedulaamin:"0000000000",nombreadmin:"No registrado",apellidoadmin:"No registrado"})
    const {logout} = Mecanico();
    const logoutb = (e) =>{
        e.preventDefault();
        logout();
        window.location.href='http://localhost:3000/'
    }
    var url='http://localhost:9000/whoiamadmin'
    var token= window.sessionStorage.getItem('jwt')
    if (state.cedulaamin=="0000000000"){
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token}
        })
        .then(response => response.json())
        .then(data => {
            if(data != null){
                setstate({cedulaamin:data.cedula,nombreadmin:data.nombre,apellidoadmin:data.apellido})
            }else{
                alert("Error al obtener los datos del usuario")
            }
        })
    }
    
    

    return(
        <>
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <FaBars onClick={mostrarDesplegable}/>
                </Link>
                <button onClick={logoutb}>Bye</button>
            </div>
            <nav className={desplegable ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose onClick={mostrarDesplegable}/>
                        </Link>
                    </li>
                    <li>
                        <div className="user">
                            <FaUser/>
                        </div>
                        <div className="credenciales">
                            <p>{state.nombreadmin+" "+state.apellidoadmin}</p>
                            <p>{state.cedulaamin}</p>
                        </div>
                        
                    </li>
                    {itemsAdministrador.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </> 
    );
}

export default BarraAdministrador;