import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppLoged from './AppLoged';
import reportWebVitals from './reportWebVitals';
//Rutas Tareas
import ListarTareas from "./routes/listartareas.js";
import DetalleTarea from "./routes/detalletarea.js";
//Redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';


const rootElement = document.getElementById("root");

const storeReducer = (state=[],action) =>{
  switch (action.type) {
    case 'ADD_USER':
      return state=action.payload;
    case 'RESET':
      return state=[];
    default:
      return state
  }
}
const store=createStore(storeReducer);

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/app/" element={<AppLoged />}>
        <Route path="tareas" element={<ListarTareas />} />
        <Route path="tareas/:idtarea/:ver" element={<DetalleTarea />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  ,
  rootElement
);

reportWebVitals();
