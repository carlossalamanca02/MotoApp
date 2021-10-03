
import React from 'react';
import { FaExchangeAlt } from 'react-icons/fa'
import {  AiFillFileAdd,  AiOutlineFileSearch, AiOutlineLogout } from 'react-icons/ai'
import { GiProgression  } from 'react-icons/gi'


export const itemsMecanico = [
  {
    title: 'Resgistrar servicio',
    path: '/AñadirServicioMecanico',
    icon: < AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Añadir Progreso',
    path: '/AñadirProgresoM',
    icon: <GiProgression/>,
    cName: 'nav-text' 
  },
  {
    title: 'Mostrar Servicios',
    path: '/BuscarServiciosM',
    icon: <FaExchangeAlt/>,
    cName: 'nav-text' 
  },

  
];