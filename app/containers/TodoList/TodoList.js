import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions';
// import { createSelector } from 'reselect';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.todos &&
            this.props.todos.map(todo => (
              <ListItem key={todo.id}>{todo.todo_item}</ListItem>
            ))}
        </ul>
      </div>
    );
  }
}

const ListItem = styled.li`
  margin: 0.5rem;
`;

// const appDataSelector = state => state.todos;
const dataSelector = state => state.todos.data;
// const recentSelector = createSelector(
//   dataSelector,
//   todos => todos.filter(todo => todo[0]),
// );

const mapStateToProps = state => {
  return { todos: dataSelector(state) };
};

export default connect(
  mapStateToProps,
  { fetchTodos },
)(TodoList);
