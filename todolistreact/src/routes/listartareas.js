import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import Tabla from '../components/Tabla.js'
//Redux
import {useSelector} from 'react-redux';

export default function ListarTareas() {

    const [tareas, setTareas] = useState([]);
    const [tareasBool, settareasBool] = useState(false);
    const cabecera=["idtarea","nombre","descripcion","fecha_ini","estimada",""];
    const usuario=useSelector(state=>state);

    const getTareas = async () => {
        const tareasResults =
            await fetch("http://localhost:3000/tareas", {
            method: "GET",
         });
        const tareasData = await tareasResults.json();
        setTareas(tareasData);
        settareasBool(true);
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        try {
          getTareas();
        } catch (error) {
          console.log(error);
        }
      }, []);
    return (
    <div>
        <div class="container bodygeeks">
            <h2>Listar Tareas</h2>
            {tareasBool && <Tabla cabecera={cabecera} datos={tareas}/>}
        </div>
    </div>
    );
  }