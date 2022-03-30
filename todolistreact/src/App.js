import logo from './logo.svg';
import './App.css';
import Tarea from './components/Tarea.js'

function App() {
  return (
    <div class="container bodygeeks">
      <div class="row">
        <div class="col">
          <Tarea tmpoEstimado={5} nombre="Primera Tarea" descripcion="En esta primera tarea debemos realizar el componente"/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={3} nombre="Segunda Tarea" descripcion="En esta segunda tarea debemos realizar el App.js"/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={1} nombre="Tercera Tarea" descripcion="En esta tercera tarea debemos realizar la integración y prueba"/>
        </div>
      </div>      
    </div>
  );
}

export default App;
