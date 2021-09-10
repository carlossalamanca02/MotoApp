import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Header } from './Componentes/Inicio';
import {Information }  from './Componentes/Inicio';
import { HistorialServicio, LoginClientes } from './Componentes/Clientes';
import {LoginTrabajadores} from './Componentes/Trabajadores'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div className="App">  
          <Route exact path="/" component={Header}/>
          <Route exact path="/" component={Information}/>
          <Route exact path="/LoginCliente" component={LoginClientes} />
          <Route exact path="/LoginTrabajadores" component={LoginTrabajadores} />
          <Route exact path="/HistorialServicio" component={HistorialServicio} />

        </div>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
