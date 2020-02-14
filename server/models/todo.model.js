const addTodo = newTodo => {
  const todo = { todo_item: newTodo };
  return todo;
};

module.exports = { addTodo };
