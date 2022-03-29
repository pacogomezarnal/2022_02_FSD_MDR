const swDocument = 
{
    "openapi": "3.0.1",
    "info": {
      "title": "ToDoList",
      "description": "Este es un ejemplo sobre la creación de un TODOLIST",
      "contact": {
        "name":"Paco",
        "email": "paco.gomez.arnal@gmail.com"
      }
    ,
      "version": "0.1.0"
    },
    "tags": [
      {
        "name": "tareas",
        "description": "Tareas planificadas"
      },
    ],
    "paths": {
        "/tareas/{id}": {
            "get": {
              "tags":[
                "tareas"
              ],
              "summary": "Encuentra una tarea",
              "description": "Busca y devuelve una tarea con el id como parámetro",
              "parameters":[
              {
                "name": "id",
                "description": "id de la tarea",
                "in": "path",
                "required": true,
                "schema":{
                  "type": "integer",
                  "format": "int64"
                }
              }],
              "responses": {
                "200": {
                  "description": "successful operation",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/Tarea"
                      }
                    }
                  }
                },
                "500": {
                  "description": "Problem returning tasks",
                  "content": {}
                },
              },
              "security": [
                {
                  "api_key": []
                }
              ]
            }
          },   
    }
}

export default swDocument;