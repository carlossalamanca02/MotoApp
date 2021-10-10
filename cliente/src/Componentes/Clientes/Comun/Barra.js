import React, {useState} from "react";
import './Barra.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { itemsBarra } from "./itemsBarra";
import { FaBars, FaUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Mecanico from "../../hooks/mecanico";
import { IoMdLogOut } from 'react-icons/io'
function Barra(){
    const [desplegable,setDesplegable] = useState(false);
    const mostrarDesplegable = () => setDesplegable(!desplegable);
    const [state,setstate]=useState({placa:"000000",nombrecliente:"No registrado",apellidocliente:"No registrado"})
    const {logout} = Mecanico();
    const logoutb = (e) =>{
        e.preventDefault();
        logout();
        window.location.href='http://localhost:3000/'
    }
    var url='http://localhost:9000/whoiamcliente'
    var token= window.sessionStorage.getItem('jwt')
    if (state.placa=="000000"){
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token}
        })
        .then(response => response.json())
        .then(data => {
            if(data != null){
                setstate({placa:data.placa,nombrecliente:data.nombre,apellidocliente:data.apellido})
            }else{
                alert("Error al obtener los datos del cliente")
            }
        })
    }
    return(
        <>
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <FaBars onClick={mostrarDesplegable}/>
                </Link>
            </div>
            <nav className={desplegable ? 'nav-menu active':'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiOutlineClose onClick={mostrarDesplegable}/>
                        </Link>
                    </li>
                    <li>
                        <div className="userAdmin">
                            <FaUser/>
                        </div>
                        <div className="credenciales">
                            <p>{state.nombrecliente+" "+state.apellidocliente}</p>
                            <p>{state.placa}</p>
                        </div>    
                    </li>
                    <hr className="separador"></hr>
                    {itemsBarra.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                    <button onClick={logoutb} className="botonS"><IoMdLogOut/>  Salir</button>
                </ul>
            </nav>
        </> 
    );
}

export default Barra;