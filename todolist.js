// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./sequelize');
const Task = require('./models/task');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Ruta para obtener todas las tareas
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

// Ruta para crear una nueva tarea
app.post('/tasks', async (req, res) => {
  const {description} = req.body;
  const task = await Task.create({description});
  res.json(task);
});

// Ruta para marcar una tarea como completada
app.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findByPk(taskId);

  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  task.completed = true;
  await task.save();

  res.json(task);
});

//Ruta para eliminar una tarea
app.delete('/tasks/:id',async (req, res) => {
  const taskId = req.params.id;
  const task = await Task.findByPk(taskId);
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  await task.destroy();

  res.json({ message: 'Tarea eliminada exitosamente' });
})
// Iniciar el servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });
});
