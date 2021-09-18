
import React from 'react';
import { FaMotorcycle } from 'react-icons/fa'
import {  AiOutlineDatabase, AiOutlineLogout } from 'react-icons/ai'

export const itemsAdministrador = [
  {
    title: 'Resgistrar servicio',
    path: '/RegistrarServicio',
    icon: < AiOutlineDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar servicios',
    path: '/GestionarServicio',
    icon: <FaMotorcycle/>,
    cName: 'nav-text'
  },
  {
    title: 'Agregar personal',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar personal',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  },
  {
    title: 'Registrar pieza',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar piezas',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  }

];