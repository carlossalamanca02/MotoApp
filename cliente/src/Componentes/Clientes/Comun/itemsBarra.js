
import React from 'react';
import { FaMotorcycle } from 'react-icons/fa'
import {  AiOutlineDatabase, AiOutlineLogout } from 'react-icons/ai'
import { BrowserRouter,Switch} from 'react-router-dom';

export const itemsBarra = [
  {
    title: 'Historial',
    path: '/HistorialServicio',
    icon: < AiOutlineDatabase />,
    cName: 'nav-text'
  },
  {
    title: 'Estado de servicio',
    path: '/EstadoServicio',
    icon: <FaMotorcycle/>,
    cName: 'nav-text'
  },


];