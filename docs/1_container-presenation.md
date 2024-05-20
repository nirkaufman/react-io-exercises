# Container presentation pattern

lets warm up with one of the most common patterns in the frontend world: the container presentation pattern.
this pattern is used to separate the concerns of a component into two different components: the container and the presentation component.

## Motivation:
- Separation of concerns
- Reusability
- Testability
- Maintainability
- Scalability
- Performance

## Exercise: Render users cards
A classic full blown example of a common component in Rect

The goal is apply the principles:
- Separation of concerns
- Single responsibility
- 
### Resources
- https://randomuser.me/api/?results=1 for random user data
- starter files: `src/start/1_container-presentation/container-start.tsx`

## Solutions: Render users cards

### 1. Container presentation pattern `container-end-1.tsx`
Break the component into two components: container and presentation.
The container component will be responsible for fetching the data and passing it to the presentation component.
Mainly, the container component will be responsible for the logic and the presentation component will be responsible for the UI.
This is all redundant since we started to use hooks, but it's still a good practice to separate the concerns.


### 2. Custom hook `container-end-2.tsx`
Create a custom hook to fetch the data and use it in the container component.
It can be a good practice to separate the logic from the UI, and it can be a good way to reuse the logic in different components.
The hook can be specific to the component or a generic hook that can be used in different components.

### Discussions:
1. The container component is the `Glue` between the presentation component and the data.
2. The presentation components are reusable, while the container components are specific to the data.
3. Should we return components from hooks? there is a debate. (technically, we can return components from hooks, but it's not a good practice)

### 3. Product requirement: more then one card `container-end-3.tsx`
Now we need to render more than one version of a card.
The `UserInformation` should be reusable and open for changes

__usage__
```tsx
<UserInformation userComponent={UserCardVersionTwo}/>
<UserInformation userComponent={UserCardEnd}/>
```

### Summary:
In the process of refactoring we ended up combing different techniques ro achieve our goals:
- custom hook
- container presentation pattern
- render props pattern


