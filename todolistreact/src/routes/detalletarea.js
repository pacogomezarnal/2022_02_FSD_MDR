import React, { useState, useEffect } from 'react';
import Barra from '../components/Barra.js'
import { useParams } from "react-router-dom";

export default function DetalleTarea() {
    const params = useParams()
    return (
        <div>
            <Barra/>
            <div class="container bodygeeks">
                <h2>Detalle Tarea: {params.idtarea}</h2>
            </div>
        </div>
        );
}