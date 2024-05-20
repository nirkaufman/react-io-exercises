# High order components
Basically, a higher-order component is a function that takes a component and returns a new component. It's a pattern that's used throughout React and it
can be a bit confusing at first. But it's a very powerful pattern that can help you write more reusable code.
It is used to share common functionality between components without repeating code.
So its implement the DRY principle (Don't Repeat Yourself).

Having said that, it is not that popular in the React community anymore. 
The new way to share common functionality between components is by using hooks.


## Exercise: create a simple HOC to feel the pain
The simplest way to understand HOC is to create a simple and minimal one.
Take no more than 10min for this exercise.

### Resources
- starter files: `src/start/2_high_order_components/hoc-loader-start.tsx`


## Solutions:

### 1. HOC `hoc-loader-end-1.tsx`
Let's implement this simple HOC and discuss the pros and cons of this pattern.
Also, lets discuss the alternatives to HOCs with hooks.


### 2. Extend and enrich components `hoc-loader-end-2.tsx`
Sometimes we need to extend and enrich components and elements with additional functionality.
Hooks are great, but if need to interact with Elements directly, it will not be
The best solution

Simpler to use, and doesn't care about the inner workings of the component.
