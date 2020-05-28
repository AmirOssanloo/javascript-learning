import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);

  if (state) {
    wrapper.setState(state);
  }

  return wrapper;
};

const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'app');
  
  expect(app.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  
  expect(counterDisplay.length).toBe(1);
});

test('renders counter error on attempt to decrement bellow 0', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  const counterError = findByTestAttr(wrapper, 'counter-error');

  expect(counterError.length).toBe(1);
});

test('removes counter error when counter increments above 0', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  decrementButton.simulate('click');
  const counterErrorShow = findByTestAttr(wrapper, 'counter-error');

  expect(counterErrorShow.length).toBe(1);

  incrementButton.simulate('click');
  const counterErrorHide = findByTestAttr(wrapper, 'counter-error');

  expect(counterErrorHide.length).toBe(0);
})

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');

  expect(initialCounterState).toBe(0);
});

test('user input increments counter', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });

  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter + 1);
});