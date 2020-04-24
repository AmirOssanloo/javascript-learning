import React from 'react';
import { shallow } from 'enzyme';
import Root from './Root';

describe('Root', () => {
  test('should match with snapshot', () => {
    const component = shallow(<Root />);
    expect(component).toMatchSnapshot();
  });
});
