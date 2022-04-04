import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";

const FormDetalle = props => {
    const [tarea, setTarea]=useState(props.tarea);
    const [update, setUpdate]=useState(props.update);

    const cambiarUpdate = () =>{setUpdate(true)}
    const navigate = useNavigate();

    const formSubmit = async (e) => {
          // Make the submit dont refresh the page
          e.preventDefault();
          try {
            const formData = {
              id: e.target[0].value,
              nombre: e.target[1].value,
              descripcion: e.target[2].value,
              fecha_ini: e.target[3].value,
              estimada: e.target[4].value,
            };
            if(formData.id==0){
              const inserTarea = await fetch("http://localhost:3000/tareas/", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            }else{
              const updateTarea = await fetch("http://localhost:3000/tareas/"+formData.id, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
              });
            }
            navigate('/app/tareas');
          } catch (error) {
            alert("no se ha cargado la bd " + error);
          }
      
            

    };

    return(
        <form class="row g-3" onSubmit={(e) => formSubmit(e)}>
            <div class="col-md-2">
            <label for="idtarea" class="form-label">id</label>
            <input type="text" class="form-control" id="idtarea" defaultValue={tarea.idtarea} disabled={!update}/>
            </div>
            <div class="col-md-6">
            <label for="nombre" class="form-label">nombre</label>
            <input type="text" class="form-control" id="nombre" defaultValue={tarea.nombre} disabled={!update} />
            </div>
            <div class="col-md-12">
            <label for="descripcion" class="form-label">descripción</label>
            <input type="text" class="form-control" id="descripcion" defaultValue={tarea.descripcion} disabled={!update} />
            </div>
            <div class="col-md-6">
            <label for="fechaini" class="form-label">fecha inicion</label>
            <input type="date" class="form-control" id="fechaini" defaultValue={tarea.fecha_ini} disabled={!update} />
            </div>
            <div class="col-md-6">
            <label for="estimada" class="form-label">estimada</label>
            <input type="text" class="form-control" id="estimada" defaultValue={tarea.estimada} disabled={!update} />
            </div>
            <div class="col-md-1">
            {!update && <button type="submit" class="btn btn-primary" onClick={cambiarUpdate}>Editar</button>}
            {update && <button type="submit" class="btn btn-primary">Enviar</button>}
            </div>
        </form>
    )

}

export default FormDetalle;