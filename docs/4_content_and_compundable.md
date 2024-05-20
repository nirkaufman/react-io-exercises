# Context and compoundable components
Let's expend  the discussion and enrich our tool box with some more concepts.
This time it all about context and compoundable components.

## 1. The Switch component challenge 

Let's start by implementing a simple component utility that will help
us to get rid of nested ternary operators in our code.

solution: ` switch-solution.tsx`;


## 2. Customizable components techniques
Based on the Switch component, let's implement a real world example.
Lets start with an accordion.
The same accordion pattern is used also for tabs, navigation, and more.


### Accordion basic requirements - solution 1 `AccordionEnd1.tsx`
- use render props to allow customization of the accordion content
- while this solution works, we can create a better DX by using components
- better DX means: fewer props, more JSX, everything exposed in the same place


### Breaking up the accordion  `AccordionEnd2.tsx`

