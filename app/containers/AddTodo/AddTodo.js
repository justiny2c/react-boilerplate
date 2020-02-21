import React, { Component } from 'react';
import styled from 'styled-components';
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
    return (
      <FormContainer>
        <Input
          placeholder="Type new todo..."
          onChange={this.handleChange}
          value={this.state.input}
          name="input"
        />
        <button onClick={this.handleSubmit}>Add to list</button>
      </FormContainer>
    );
  }
}

const FormContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin-top: 2rem;
`;

const Input = styled.input`
  width: 50%;
  margin-right: 0.5rem;
`;

const mapStateToProps = state => ({
  ...state,
});

export default connect(
  mapStateToProps,
  { postTodo },
)(AddTodo);
