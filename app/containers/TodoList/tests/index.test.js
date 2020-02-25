import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';

import { ListContainer } from '../TodoList';
import TodoList from '../TodoList';

// jest
describe('<TodoList />', () => {
  it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList />, div);
  });
});

// react testing library
describe('<ListContainer />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<ListContainer />);
    expect(firstChild.tagName).toEqual('div');
  });
});
