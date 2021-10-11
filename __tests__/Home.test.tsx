import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';
import Home from '../src/screens/Home'

describe('Home', () => {
  test('should show Home', () => {
    const wrapper = render(<Home />)
    expect(wrapper.getByTestId('home'))
  })
  
})
