# To-Do List App

Este proyecto es una aplicación To-Do List construida con Node.js, Express, y Sequelize. Permite a los usuarios realizar operaciones básicas como crear, obtener, marcar como completadas y eliminar tareas.
La aplicacion estará disponible en http://localhost:3000.

## Requisitos

- Node.js instalado en tu máquina.
- MySQL instalado y configurado.

## Librerías y Frameworks Utilizados

- [Node.js](https://nodejs.org/): Entorno de ejecución para JavaScript.
- [Express](https://expressjs.com/): Framework web para Node.js.
- [Sequelize](https://sequelize.org/): ORM (Object-Relational Mapping) para Node.js.

## Uso
# Obtener todas las tareas
envia una solicitud GET a `http://localhost:3000/tasks` para obtenre todas las tareas
# Crear una nueva tarea
Envia una solicituid de POST a http://localhost:3000/tasks con cuerpo JSON que contenga la descripcion de la tarea:
```json
{
  "description": "Realizar tarea importante"
}
```
# Marcar una tarea como completada

Envía una solicitud PUT a http://localhost:3000/tasks/:id donde :id es el identificador de la tarea que deseas marcar como completada.

# Elimina una tarea

Envía una solicitud DELETE a http://localhost:3000/tasks/:id para eliminar una tarea específica.