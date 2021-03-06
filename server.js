const express = require('express');
const app = express();
const {
  addTask,
  toggleTaskStatus,
  getTodo,
  deleteTask,
  updateTitle,
  resetTodo,
} = require('./handlers');
const PORT = process.env.PORT || 8000;

app.use(express.static('build'));
app.use(express.json());
app.get('/api/getTodo', getTodo);
app.post('/api/addTask', addTask);
app.post('/api/toggleTaskStatus', toggleTaskStatus);
app.post('/api/deleteTask', deleteTask);
app.post('/api/updateTitle', updateTitle);
app.post('/api/resetTodo', resetTodo);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
