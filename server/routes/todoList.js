const router = require('express').Router();
const filename = '../todoList.json';
const data = require(filename);
const helper = require('./helper.js');

router.route('/').get((req, res) => {
  res.json(data);
});

router.route('/').post((req, res) => {
  const id = { id: helper.getNewId(data) };
  const todo = req.body;
  const date = { createdAt: helper.newDate() };
  const newTodo = { ...id, ...todo, ...date };
  data.unshift(newTodo);
  helper.writeJSONFile(filename, data);
  res.json(data);
});

module.exports = router;
