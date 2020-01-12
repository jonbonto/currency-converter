import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup)

const setup = () => {
  const utils = render(<App />)
  const input = utils.getByLabelText('usd-amount')
  return {
    input,
    ...utils,
  }
}

test('amount is changed when input changed', () => {

  const { input } = setup() 

  expect(input.value).toBe("10")

  fireEvent.change(input, { target: { value: 15.0 }})

  expect(input.value).toBe("15")
});

test('Click remove button should remove currency from list', async () => {
  const { getAllByRole, findAllByText } = setup()
  
  const allButton = getAllByRole("button")
  // Initial 3 currencies + 1 add button 
  expect(allButton.length).toBe(4)
  
  fireEvent.click(allButton[1])

  const items = await findAllByText(/1 USD =/)
  
  expect(items).toHaveLength(2);
});
