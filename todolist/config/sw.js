/*
* Parámetros configuración swagger docs
*/
const optionsSW = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "ToDoList Express API documentada con Swagger",
        version: "0.1.0",
        description:
          "Este es un simple API para mostrar el funcionamiento de Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
      contact: {
          name: "Paco Gomez",
          url: "https://repositoriocompartido.es",
          email: "paco.gomez.arnal@gmail.com",
      },
      servers: [
          {
            url: "http://localhost:3000/tasks",
          },
        ],
      },
    },
    apis: ["./routes/tasksRoutes.js"],
  }
  
  export default optionsSW;
  