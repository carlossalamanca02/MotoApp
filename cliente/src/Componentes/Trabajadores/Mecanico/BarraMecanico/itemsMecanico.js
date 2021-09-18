
import React from 'react';
import { FaExchangeAlt, FaMotorcycle } from 'react-icons/fa'
import {  AiFillFileAdd, AiOutlineDatabase, AiOutlineFileSearch, AiOutlineLogout } from 'react-icons/ai'

export const itemsMecanico = [
  {
    title: 'Resgistrar servicio',
    path: '/AñadirServicioMecanico',
    icon: < AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Actualizar servicio',
    path: '/ActualizarServicioM',
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