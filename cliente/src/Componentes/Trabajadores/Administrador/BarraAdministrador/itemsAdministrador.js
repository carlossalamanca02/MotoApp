
import React from 'react';
import { FaExchangeAlt, FaUserCog, FaMotorcycle} from 'react-icons/fa'
import {  AiFillFileAdd, AiOutlineUserAdd, AiOutlineLogout } from 'react-icons/ai'
import {  GiProgression } from 'react-icons/gi'
import {  HiDocumentSearch } from 'react-icons/hi'

export const itemsAdministrador = [
  {
    title: 'Resgistrar servicio',
    path: '/AgregarServicioA',
    icon: < AiFillFileAdd />,
    cName: 'nav-text'
  },
  {
    title: 'Añadir Progreso',
    path: '/AñadirProgresoA',
    icon: <GiProgression/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar servicios',
    path: '/GestionarServiciosA',
    icon: <FaExchangeAlt/>,
    cName: 'nav-text'
  },
  {
    title: 'Agregar personal',
    path: '/',
    icon: <AiOutlineUserAdd/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar personal',
    path: '/',
    icon: <FaUserCog/>,
    cName: 'nav-text'
  },
  {
    title: 'Registrar pieza',
    path: '/',
    icon: <FaMotorcycle/>,
    cName: 'nav-text'
  },
  {
    title: 'Gestionar piezas',
    path: '/',
    icon: <HiDocumentSearch/>,
    cName: 'nav-text'
  },
  {
    title: 'Salir',
    path: '/',
    icon: <AiOutlineLogout/>,
    cName: 'nav-text'
  }

];