import { Link } from "react-router-dom";
//Redux
import {useDispatch,useSelector} from 'react-redux';

function Barra() {
    const usuario=useSelector(state=>state);

    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light geeks">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/geeks_mano.png" height="50"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link to="/" class="nav-link active">Home</Link></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tareas
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/app/tareas" class="dropdown-item">Listar tareas</Link></li>
                                <li><Link to="/app/tareas/0/editar" class="dropdown-item">Nueva tarea</Link></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Tareas por usuario</a></li>
                            </ul>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Usuario: {usuario.nombre}
                    </span>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Barra;