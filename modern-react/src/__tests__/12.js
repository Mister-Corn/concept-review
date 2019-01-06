import React from 'react'
import VanillaTilt from 'vanilla-tilt'
import {render, wait, fireEvent} from 'react-testing-library'
import Usage from '../exercises-final/12'
// import Usage from '../exercises/12'

beforeEach(() => {
  jest.spyOn(VanillaTilt, 'init')
})

afterEach(() => {
  VanillaTilt.init.mockRestore()
})

test('calls VanillaTilt.init with the root node', async () => {
  const {container, getByText} = render(<Usage />)
  fireEvent.click(getByText(/show/i))
  await wait(() => expect(VanillaTilt.init).toHaveBeenCalledTimes(1))
  expect(container.querySelector('.tilt-root')).toHaveProperty('vanillaTilt')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=learn%20react&e=12&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
