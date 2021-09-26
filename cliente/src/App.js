import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Header } from './Componentes/Inicio';
import {Information }  from './Componentes/Inicio';
import { HistorialServicio, LoginClientes, EstadoServicio } from './Componentes/Clientes';
import {AñadirServicio, LoginTrabajadores, ActualizarServicioM, RegistrarServicio, AgregarServicios, AñadirProgreso, 
  GestionarServicios, BuscarServicios} from './Componentes/Trabajadores'



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">  
          <Route exact path="/" component={Header}/>
          <Route exact path="/" component={Information}/>
          <Route exact path="/LoginCliente" exact component={LoginClientes} />
          <Route exact path="/LoginTrabajadores" exact component={LoginTrabajadores} />
          <Route exact path="/HistorialServicio" exact component={HistorialServicio} />
          <Route exact path="/EstadoServicio" exact component={EstadoServicio} />
          <Route exact path="/AñadirServicioMecanico" exact component={AñadirServicio} />
          <Route exact path="/AñadirProgresoM" exact component={ActualizarServicioM} />
          <Route exact path="/AgregarServicioA" exact component={AgregarServicios} />
          <Route exact path="/AñadirProgresoA" exact component={AñadirProgreso} />
          <Route exact path="/GestionarServiciosA" exact component={GestionarServicios} />
          <Route exact path="/BuscarServiciosM" exact component={BuscarServicios} />
        </div>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
