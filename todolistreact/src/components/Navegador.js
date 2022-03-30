import { Link } from "react-router-dom";

function Navegador() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg geeks">
            <a class="navbar-brand" href="#"><img src="geeks_mano.png" height="50"/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <ul class="navbar-nav">
                    <li class="nav-item active"><Link to="/" class="nav-link">Tareas</Link></li>
                    <li class="nav-item active"><Link to="/nuevatarea" class="nav-link">Nueva tarea</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  );
}

export default Navegador;