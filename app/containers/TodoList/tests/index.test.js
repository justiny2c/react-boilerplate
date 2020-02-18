import React from 'react';
import { render } from 'react-testing-library';

import ListContainer from '../TodoList';

describe('<ListContainer />', () => {
  it('should render an <div> tag', () => {
    const {
      container: { firstChild },
    } = render(<ListContainer />);
    expect(firstChild.tagName).toEqual('div');
  });
});
