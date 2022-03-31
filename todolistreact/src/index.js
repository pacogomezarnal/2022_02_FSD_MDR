import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Rutas Tareas
import ListarTareas from "./routes/listartareas.js";
import DetalleTarea from "./routes/detalletarea.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/tareas" element={<ListarTareas />} />
      <Route path="/tareas/:invoiceId" element={<DetalleTarea />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

reportWebVitals();
