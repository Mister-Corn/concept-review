## Exercise 01

`useState` can also accept an update function. Most of the time, this is not
necessary, but if the use of the `useState` function happens in a different
"tick" from the time the `useState` is declared, the state might be different.
In that case, do use an update function.

e.g. Use state updater after `setTimeout` or some asynchronous operation.

## Exercise 03

Why `useEffect`?

- Keep functions idempotent by keeping impure operations in `useEffect` Function
  component will run, then anything in `useEffect`
- Prevent blocking operations from impeding rendering of the component
