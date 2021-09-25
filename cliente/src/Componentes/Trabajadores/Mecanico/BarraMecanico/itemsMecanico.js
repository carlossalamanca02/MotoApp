
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
    title: 'Gestionar Servicios',
    path: '/GestionarServiciosM',
    icon: <FaExchangeAlt/>,
    cName: 'nav-text' 
  },
  {
    title: 'Buscar piezas',
    path: '/',
    icon: <AiOutlineFileSearch/>,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  },


];