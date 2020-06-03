To create a new react app use command - npx create-react-app {app-name}

### REACT Components

Communicating with Props

- Component Nesting - component can be shown inside others


- Component Re-usability - component can easily be reusable
- component Configuration - configure a component when it is created.

{/*  Communicating with Props */}
/*
- Component Nesting - component can be shown inside others


- Component Re-usability - component can easily be reusable
- Component Configuration - configure a component when it is created.

In the upcoming lecture, we will be getting the link for the Semantic UI CDN to put in our index.html. Since some students have been confused about which link to get I am placing it here for easy access:

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">

### New Library
faker.js - generate massive amounts of fake data in the browser and node.js

### Creating a reusable component

1. Identify the JSX that appears duplicate
2. What is the purpose of that block of JSK? Think of a descriptive name for what it does
3. Create a new file to house this new component - it should have the same name as the component. - React components are named with Proper case - e.g. CommentDetails - C & D capital.
4. Create a new component in the new file, paste the JSX into it
5. Make the new component configurable by using React's props 'system'.


##### Component Basics
- A Component is a function or a class, which produces HTML to show the user and handle feedback from the user.
- To make the component available to the project file, Component should have a export statement at the bottom of component code.
- Add import statement int he file you want to use the component in.
- To add one component in another add the component name in tag for like <CommentDetail />. Interpolation will not be used, JS variables need to be used using interpolation. Components are one exception to the interpolation rule.
- Functional Component is good for simple content. Class Components is good for about everything.

##### React Props
- Props are a system for passing data from a parent component to a child component
- Goal is to customize or configure a child component.
- Props are short for property
- Providing props from parent to child for e.g. <CommonDetail author = "Sam" />

##### Class Based Components
Benefits of class Based components
- Easier Code organization
- Can use 'state' -  easier to handle user input
- Understand lifecycle events - Easier to do things the app first starts

