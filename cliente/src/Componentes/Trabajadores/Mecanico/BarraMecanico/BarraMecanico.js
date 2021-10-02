import React, {useState} from "react";
import './BarraMecanico.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { itemsMecanico } from "./itemsMecanico";
import { FaBars, FaUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import Mecanico from "../../../hooks/mecanico";

function BarraMecanico(){
    const [state,setstate]=useState({cedulamec:"0000000000",nombremec:"No registrado",apellidomec:"No registrado"})
    const [desplegable,setDesplegable] = useState(false);
    const mostrarDesplegable = () => setDesplegable(!desplegable);
    const {logout} = Mecanico();
    const logoutb = (e) =>{
        e.preventDefault();
        logout();
        window.location.href='http://localhost:3000/'
    }
    var url='http://localhost:9000/whoiammec'
    var token= window.sessionStorage.getItem('jwt')
    if (state.cedulamec=="0000000000"){
        fetch(url,{
            method:'post',
            headers:{'Content-Type':'application/json','x-access-token':token}
        })
        .then(response => response.json())
        .then(data => {
            if(data != null){
                setstate({cedulamec:data.cedula,nombremec:data.nombre,apellidomec:data.apellido})
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
                        <div className="credenciales">
                            <p>{state.nombremec+" "+state.apellidomec}</p>
                            <p>{state.cedulamec}</p>
                        </div>
                        
                    </li>
                    {itemsMecanico.map((item,index) => {
                        return(
                            <li key={index} className={item.cName} onClick={item.onclick}>
                                <Link to={item.path} onClick={item.onclick}>
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

export default BarraMecanico;