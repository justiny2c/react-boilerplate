const router = require('express').Router();
// const fs = require('fs');
const dummyData = require('../todoList.json');

// const addTodo = require('../models/todo.model');

router.route('/').get((req, res) => {
  //   let data = fs.readFileSync(dummyData);
  res.json(dummyData);
});

module.exports = router;
