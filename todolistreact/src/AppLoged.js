import './App.css';
import { Outlet,Redirect, Link } from "react-router-dom";
import Barra from './components/Barra.js'

function AppLoged() {
  return (
  <div>
    <Barra/>
    <div class="container bodygeeks">
    <Outlet /> 
    </div>
  </div>
  );
}

export default AppLoged;
