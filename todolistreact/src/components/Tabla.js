import React, { useState, useEffect } from 'react';
import { Link, Outlet  } from "react-router-dom";

const Tabla = props => {
    const [cabecera,setCabecera]=useState(props.cabecera);
    const [datos,setDatos]=useState(props.datos);

    const cabeceraTabla = cabecera.map((item) =>
        <th scope="col">{item}</th>
    )
    const datosTabla = datos.map((item) =>{
            return(
                <tr>
                    <td><Link to={`/app/tareas/${item.idtarea}/ver`} key={item.idtarea}>{item.idtarea}</Link></td>
                    <td>{item.nombre}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.fecha_ini}</td>
                    <td>{item.estimada}</td>
                    <td>
                        <Link to={`/app/tareas/${item.idtarea}/editar`} key={item.idtarea}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                            </svg>
                        </Link>
                    </td>
                </tr>
            )
        }
    )

    useEffect(() => {
      }, []);
    return(
        <table class="table">
        <thead>
            <tr>
                {cabeceraTabla}
            </tr>
        </thead>
        <tbody>
            {datosTabla}
        </tbody>
        </table>

    )
}

export default Tabla;