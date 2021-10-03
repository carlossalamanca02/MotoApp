
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
  }
];