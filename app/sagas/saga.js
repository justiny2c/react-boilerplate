import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_START,
  receiveTodos,
  fetchData,
  postedTodo,
  addTodo,
  POST_START,
} from '../redux/actions';


function* getTodos(action) {
  try {
    // do api call
    const data = yield call(fetchData);
    yield put(receiveTodos(data));
  } catch (e) {
    console.log(e);
  }
}

function* addNewTodo(action) {
  try {
    // do api call
    const data = yield call(addTodo, action.todo);
    yield put(postedTodo(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* mySaga() {
  yield takeLatest(FETCH_START, getTodos);
  yield takeLatest(POST_START, addNewTodo);
}
