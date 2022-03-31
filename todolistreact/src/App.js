import './App.css';
import { Outlet, Link } from "react-router-dom";
import Barra from './components/Barra.js'

function App() {
  return (
  <div>
    <Barra/>
    <div class="container bodygeeks">
    <Outlet /> 
    </div>
  </div>
  );
}

export default App;
