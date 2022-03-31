import './App.css';
import Tarea from './components/Tarea.js'
import Barra from './components/Barra.js'
import tareas from './data/tareas.js'

function App() {
  return (
  <div>
    <Barra/>
    <div class="container bodygeeks">
      <div class="row">
        <div class="col-4">
          <Tarea tmpoEstimado={tareas.tmpoEstimado} nombre={tareas.nombre} descripcion={tareas.descripcion} subtareas={tareas.subtareas}/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={3} nombre="Segunda Tarea" descripcion="En esta segunda tarea debemos realizar el App.js" subtareas={tareas.subtareas}/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={1} nombre="Tercera Tarea" descripcion="En esta tercera tarea debemos realizar la integración y prueba" subtareas={tareas.subtareas}/>
        </div>
      </div>      
    </div>
  </div>
  );
}

/**  TAREAS FIJAS
        <div class="col">
          <Tarea tmpoEstimado={5} nombre="Primera Tarea" descripcion="En esta primera tarea debemos realizar el componente"/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={3} nombre="Segunda Tarea" descripcion="En esta segunda tarea debemos realizar el App.js"/>
        </div>
        <div class="col">
          <Tarea tmpoEstimado={1} nombre="Tercera Tarea" descripcion="En esta tercera tarea debemos realizar la integración y prueba"/>
        </div>
 */
export default App;
