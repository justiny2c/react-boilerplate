import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions';
import { createSelector } from 'reselect';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <ListContainer>
        <ul>
          {this.props.todos &&
            this.props.todos.map(todo => (
              <p key={todo.id}>
                {todo.id}. {todo.todo_item}
              </p>
            ))}
        </ul>
      </ListContainer>
    );
  }
}

export const ListContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-top: 2rem;
`;

// this selector "caches" the todos data
const getTodos = createSelector(
  state => state.todos.data,
  todos => todos,
);

// mapStateToProps is called everytime there is a change to state
const mapStateToProps = state => ({ todos: getTodos(state) });

export default connect(
  mapStateToProps,
  { fetchTodos },
)(TodoList);
