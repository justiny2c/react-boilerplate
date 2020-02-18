import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTodo } from '../../redux/actions';

export class AddTodo extends Component {
  state = {
    input: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.postTodo(this.state.input);
    this.setState({ input: '' });
    this.props.history.push('/');
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          placeholder="Type new todo..."
          onChange={this.handleChange}
          value={this.state.input}
          name="input"
        />
        <button onClick={this.handleSubmit}>Add to list</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  { postTodo },
)(AddTodo);
