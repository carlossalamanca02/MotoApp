import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Header } from './Componentes/Inicio';
import {Information }  from './Componentes/Inicio';
import { HistorialServicio, LoginClientes, EstadoServicio } from './Componentes/Clientes';
import {AñadirServicio, LoginTrabajadores, ActualizarServicioM, RegistrarServicio, AgregarServicios, AñadirProgreso, 
  GestionarServicios, BuscarServicios} from './Componentes/Trabajadores'
import {ContextoMecanico} from './Componentes/contextos/mecanico'


function App() {
  return (
    
    <BrowserRouter>
    
      <Switch>
            <div className="App"> 
            <ContextoMecanico>
              <Route exact path="/" component={Header}/>
              <Route exact path="/" component={Information}/>
              <Route exact path="/LoginCliente" exact component={LoginClientes} />
              <Route exact path="/AñadirServicioMecanico" exact component={AñadirServicio} />       
              <Route exact path="/LoginTrabajadores" exact component={LoginTrabajadores} />
              <Route exact path="/EstadoServicio" exact component={EstadoServicio} />
              <Route exact path="/AñadirProgresoM" exact component={ActualizarServicioM} />
              <Route exact path="/HistorialServicio" exact component={HistorialServicio} />
              <Route exact path="/AgregarServicioA" exact component={AgregarServicios} />
              <Route exact path="/AñadirProgresoA" exact component={AñadirProgreso} />
              <Route exact path="/GestionarServiciosA" exact component={GestionarServicios} />
              <Route exact path="/BuscarServiciosM" exact component={BuscarServicios} />
              </ContextoMecanico>
            </div> 
        
            <div className="App">  
            
            </div>
          
            <div className="App">
              
            </div>
        
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
