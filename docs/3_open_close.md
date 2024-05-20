# Design am extendable reusable component

In this exercise, you will design a reusable component that can be extended to create a new component. The new component will have the same functionality as the original component but with additional features.
Let's explore the code together.


## 1. Basic requirement
- list of options should be passed in (props)
- the items on the menu should be customizable (render props)
- solution: `extend-end-1.tsx`


## 2. requirement: control the input from outside
- We need to be able to control focus, and read only from outside
- we need to use forwardRef to pass the ref to the input
- solution: `extend-end-2.tsx`

```ts
const autoCompleteRef = useRef<HTMLInputElement>(null);
```


## 2. requirement: control the component from outside
- We need to toggle the menu with controlled amount of results
- We need to toggle the readOnly state from outside
- we will create an "interface" for the component with imperative ref
- solution: `extend-end-3.tsx`

