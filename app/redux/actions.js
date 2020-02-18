import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchTodos = () => ({ type: FETCH_START });
export const receiveTodos = data => ({ type: FETCH_SUCCESS, data });

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/todos');
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const POST_START = 'POST_START';
export const POST_SUCCESS = 'POST_SUCCESS';

export const postTodo = todo => ({ type: POST_START, todo });
export const postedTodo = data => ({ type: POST_SUCCESS, data });

export const addTodo = async todo => {
  const newTodo = { todo_item: todo };
  try {
    const response = await axios.post(
      `http://localhost:3000/api/todos`,
      newTodo,
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};
