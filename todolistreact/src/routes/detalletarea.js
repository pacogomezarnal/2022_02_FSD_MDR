import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import { useParams } from "react-router-dom";
import Tabla from '../components/Tabla.js'


export default function DetalleTarea() {

    const [tarea, setTarea] = useState([]);
    const [tareasBool, settareasBool] = useState(false);
    const cabecera=["idtarea","nombre","descripcion","fecha_ini","estimada",""];

    const getTarea = async () => {
        const tareasResults =
            await fetch(`http://localhost:3000/tareas/`+params.idtarea, {
            method: "GET",
         });
        const tareasData = await tareasResults.json();
        setTarea(tareasData);
        settareasBool(true);
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        try {
          getTarea();
        } catch (error) {
          console.log(error);
        }
      }, []);
    const params = useParams()
    return (
        <div>
            <div class="container bodygeeks">
                <h2>Detalle de tarea: {params.idtarea}</h2>
            </div>
        </div>
    );
}