// Counter: useState
// 🐨 you'll need to add {useState} to this import statement
import React, { useState } from 'react'

// 💰 the `useState` hook allows you to use state
// from within function components in react:
// const [name, setName] = useState('Angela')

function Counter() {
  // 🐨 you'll call useState here to get count and setCount
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  // 🐨 render the count here and add an onClick handler that increments the count
  return <button onClick={increment}>{count}</button>
}

// Don't make changes to the Usage component. It's here to show you how your
// component is intended to be used and is used in the tests.

function Usage() {
  return <Counter />
}
Usage.title = 'Counter: useState'

export default Usage
