import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormDetalle from '../components/FormDetalle.js'


export default function DetalleTarea() {

    const [tarea, setTarea] = useState([]);
    const [update, setUpdate] = useState(false);
    const [tareasBool, settareasBool] = useState(false);

    const getTarea = async () => {
        let tareaData = {
          "idtarea": 0,
          "nombre": "",
          "descripcion": "",
          "fecha_ini": "",
          "estimada": 0
        };
        if(params.idtarea!=0){
          const tareaResult =
              await fetch(`http://localhost:3000/tareas/`+params.idtarea, {
              method: "GET",
          });
          tareaData = await tareaResult.json();
        }
          setTarea(tareaData);
          if(params.ver=="editar") setUpdate(true);
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
                <h2>Detalle de tarea: {tarea.nombre}</h2>
                {tareasBool && <FormDetalle tarea={tarea} update={update}/>}
            </div>
        </div>
    );
}