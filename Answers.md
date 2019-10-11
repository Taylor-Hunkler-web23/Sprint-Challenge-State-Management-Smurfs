1. What problem does the context API help solve?


Context API helps solve the problem of having to pass props by prop drilling. With context you can pass state to only the components that need it. For example,a Grandchild component can recieve props from a Grandparent component without having to pass props through the Parent component inbetween.



1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are passed to a reducer to tell it how to update state. A reducer take in current state and an action and returns updated state. Thes store is where all the data is stored and this is why it is known as the single source of truth.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is state that is specific to a component. Application state is more "global" and accessed by multiple component like the state in the store. It is good to use application state when all the components need access to the state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to handle asynchronous operations inside our action-creators. With thunk we can do things like make API call inside our action-creators. Thunk will intercepts the redux flow and do this before the action gets to the reducer.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system we've learned is Redux. Even though Context seems a little less confusing at first, Redux is interesting because it seems like it will be useful to know for bigger projects in the future. It seems like a good way to keep track of all of your state.