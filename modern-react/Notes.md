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

## Exercise 04

If you pass a callback function which returns a value instead of the value
itself into `useState`, React will only call the callback function to get the
initial value. Subsequently, it won't call it because it already has the
previous value in state.

This is useful if getting the initial value is non-trivial. Instead of running
those operations every time the component is rendered (even though it is not
needed), it's only called once.

For the second argument of `useEffect`, it uses references equality to do the
check. Therefore, using objects in there will not do anything, since the objects
will be different.

## Exercise 05

If what you're using in effect will change how the DOM will render, use
`useEffectLayout`. Otherwise, use `useEffect`.

In this exercise, you wouldn't pass `tiltNode.current` in the second argument
for `useEffect` (as of 11/2018). This is because you only want this code to run
once, but if you pass `tiltNode.current`, it will run twice, as in the first
render, it will be undefined, but in the subsequent render, it will have the
value of the DOM node, causing `useEffect` to run again.

## Exercise 06

In addition to referencing DOM nodes, `useRef` can be used to keep track of
variables across scope and time.

Timestamp: II 57:50

---

Line 41 Note

Timestamp: II 1:00:40

"If it's not in the JSX, it shouldn't be in state"
