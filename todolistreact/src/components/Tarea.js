import React,{useState} from 'react';

const Tarea = props => {
    const [tiempo,setTiempo]=useState(props.tmpoEstimado);
    const addTime = () =>{setTiempo(tiempo+1)}
    const subTime = () =>{
        if(tiempo>0) setTiempo(tiempo-1);
    }
    const subtareasArr=props.subtareas;
    const subTareas = subtareasArr.map((item) =>
        <li key={item.id}>{item.nombre}</li>
    )
    return(
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{props.nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Tiempo estimado: {tiempo}</h6>
            <p class="card-text">{props.descripcion}</p>
            <ul>{subTareas}</ul>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-secondary btn-sm" onClick={subTime} >- dia</button>
                <button type="button" class="btn btn-secondary btn-sm" onClick={addTime}>+ dia</button>
            </div>
        </div>
    </div>
    )
}

export default Tarea;