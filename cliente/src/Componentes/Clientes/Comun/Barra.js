import React, {useState} from "react";
import './Barra.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { itemsBarra } from "./itemsBarra";
import { FaBars, FaUser } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Barra(){
    const [desplegable,setDesplegable] = useState(false);
    const mostrarDesplegable = () => setDesplegable(!desplegable);

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
                        <div className="user">
                            <FaUser/>
                        </div>
                        <div className="credenciales">
                            <p>Nombre Cliente</p>
                            <p>Moto</p>
                        </div>
                        
                    </li>
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
                </ul>
            </nav>
        </> 
    );
}

export default Barra;