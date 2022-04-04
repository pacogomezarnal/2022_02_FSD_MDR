import './App.css';
import { useNavigate} from "react-router-dom";
//Redux
import {useDispatch,useSelector} from 'react-redux';



function App() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch({ type: 'RESET',payload: []})

  const formSubmit = async (e) => {
    // Make the submit dont refresh the page
    e.preventDefault();
    try {
      const formData = {
        email: e.target[0].value,
      };
      const usuario = await fetch("http://localhost:3000/usuarios/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(response=>response.json())
      .then(data =>dispatch({ type: 'ADD_USER',payload: data}));
      navigate('/app/tareas');
    } catch (error) {
      alert("no se ha cargado la bd " + error);
    }
  
      
  
  };
  return (
  <div>
    <div class="container bodygeeks">
        <form class="row justify-content-md-center g-3" onSubmit={(e) => formSubmit(e)}>
          <div class="col-lg-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>
          <div class="col-lg-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>
          <div class="col-lg-4">
          <button type="submit" class="btn btn-primary btn-block mb-4">Entrar</button>
          </div>

        </form>
    </div>
  </div>
  );
}

export default App;
