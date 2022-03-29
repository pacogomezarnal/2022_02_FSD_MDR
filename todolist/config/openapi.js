const swDocument = 
{
  "openapi": "3.0.1",
  "info": {
    "title": "ToDoList",
    "description": "Este es un ejemplo sobre la creación de un TODOLIST",
    "contact": {
      "email": "paco.gomez.arnal@gmail.com"
    },
    "version": "0.1.0"
  },
  "tags": [
    {
      "name": "tareas",
      "description": "Tareas planificadas"
    },
  ],
  "paths": {
    "/tareas": {
      "get": {
        "summary": "Todas las tareas",
        "description": "Devuelve todas las tareas existentes",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Tareas"
                }
              },
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Pet"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied",
            "content": {}
          },
          "404": {
            "description": "Pet not found",
            "content": {}
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      },
      "put": {
        "tags": [
          "pet"
        ],
        "summary": "Update an existing pet",
        "operationId": "updatePet",
        "requestBody": {
          "description": "Pet object that needs to be added to the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          },
          "required": true
        },
        "responses": {
          "400": {
            "description": "Invalid ID supplied",
            "content": {}
          },
          "404": {
            "description": "Pet not found",
            "content": {}
          },
          "405": {
            "description": "Validation exception",
            "content": {}
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ],
        "x-codegen-request-body-name": "body"
      },
      "post": {
        "tags": [
          "pet"
        ],
        "summary": "Add a new pet to the store",
        "operationId": "addPet",
        "requestBody": {
          "description": "Pet object that needs to be added to the store",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Pet"
              }
            }
          },
          "required": true
        },
        "responses": {
          "405": {
            "description": "Invalid input",
            "content": {}
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ],
        "x-codegen-request-body-name": "body"
      }
    }
  },
  "components": {
    "schemas": {
      "Order": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "petId": {
            "type": "integer",
            "format": "int64"
          },
          "quantity": {
            "type": "integer",
            "format": "int32"
          },
          "shipDate": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "type": "string",
            "description": "Order Status",
            "enum": [
              "placed",
              "approved",
              "delivered"
            ]
          },
          "complete": {
            "type": "boolean",
            "default": false
          }
        },
        "xml": {
          "name": "Order"
        }
      },
      "Category": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "name": {
            "type": "string"
          }
        },
        "xml": {
          "name": "Category"
        }
      },
      "User": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "username": {
            "type": "string"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "password": {
            "type": "string"
          },
          "phone": {
            "type": "string"
          },
          "userStatus": {
            "type": "integer",
            "description": "User Status",
            "format": "int32"
          }
        },
        "xml": {
          "name": "User"
        }
      },
      "Tareas": {
        "type": "array",
        "json": {
          "name": "Tarea",
        },
        "items": {
          "$ref": "#/components/schemas/Tarea"
        }
      },
      "Tarea": {
        "type": "object",
        "properties": {
          "idtarea": {
            "type": "integer"
          },
          "nombre": {
            "type": "string"
          },
          "descripcion": {
            "fecha_ini": "date"
          },
          "descripcion": {
            "estimada": "integer"
          }
        }
      },
      "Pet": {
        "required": [
          "name",
          "photoUrls"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64"
          },
          "category": {
            "$ref": "#/components/schemas/Category"
          },
          "name": {
            "type": "string",
            "example": "doggie"
          },
          "photoUrls": {
            "type": "array",
            "xml": {
              "name": "photoUrl",
              "wrapped": true
            },
            "items": {
              "type": "string"
            }
          },
          "tags": {
            "type": "array",
            "xml": {
              "name": "tag",
              "wrapped": true
            },
            "items": {
              "$ref": "#/components/schemas/Tag"
            }
          },
          "status": {
            "type": "string",
            "description": "pet status in the store",
            "enum": [
              "available",
              "pending",
              "sold"
            ]
          }
        },
        "xml": {
          "name": "Pet"
        }
      },
      "ApiResponse": {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "format": "int32"
          },
          "type": {
            "type": "string"
          },
          "message": {
            "type": "string"
          }
        }
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "http://petstore.swagger.io/oauth/dialog",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    }
  }
}

export default swDocument;