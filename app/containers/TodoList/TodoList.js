// import styled from 'styled-components';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../../redux/actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.todos &&
          this.props.todos.map(todo => <p>{todo.todo_item}</p>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  todos: state.todos.data,
});

export default connect(
  mapStateToProps,
  { fetchTodos },
)(TodoList);
