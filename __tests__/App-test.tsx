/**
 * @format
 */


import 'react-native';
import React from 'react';
import App from '../App';
// Note: test renderer must be required after react-native.
import {render} from '@testing-library/react-native';

describe('Render App', () => {
  jest.useFakeTimers()
  test('should render correctly', () => {
    expect(render(<App />))
  })
  
})
