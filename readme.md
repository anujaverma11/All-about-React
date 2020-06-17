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

### REACT Component and State

Rules of Class Components
 - Must be A Javascript Class
 - Must extend (subclass) React.Component
 - Must define a 'render' method that returns some amount of JSX

Rules of State
- Only usable with Class Components
- You will confuse props with state
- 'State' is a JS object that contains data relevant to a component to (almost) instantly rerender
- State must be initialized when a component is created.
- State can only be updated using the function 'setState'

Benefits of Class Based Components
- Easier Code Organization
- Can use 'state' (another React System) so Easier to handle user input
- Understands lifecycle events - Easier to do things when the app first starts

Rules of State
- Only usable with Class Components
- You will confuse props with state
- 'State' is a JS object that contains data relevant to a component to (almost)instantly rerender
- State must be initialized when a component is created.
- State can only be updated using the function 'setState'

Using State - All the steps:
-
- States are Only usable with class based components

- You will confuse prop's with state - this is the unfortunate reality the prop system and the state system. At the end of the day they are two very different things but they are very easy to get mixed up.

- State is a javascript object that contains some amount of data that is relevant to a singular component. In the example we have, we have one piece of state or one state property that is relevant to our app component - user's current latitude which we get out of that position object.

- Updating 'State' or updating properties inside this javascript object on a component
will cause our component to almost instantly re-render
So the key of getting a component to the Render is to update its States.

 - State must be initialized when a component is first created. So the state is going to contain some amount of information that is relevant to a component and thus when we first create the component we have to initialize our state.

That essentially means that when we create the 'APP' component we have to initialize the state property and I'll show you how to do that in great great detail in just

 - State property or that state object can only be updated using the function 'setState'.

1. Initialize our state when the component is first created after that.
In our class component, we already have one method called the render method that render method is required for every single React component we create.

React says we have to define render if we don't define this function, React is going to throw an error.

There's another function that we can define inside of our class based components.
The name of this function is the constructor function.
So this is a specially named function that is particular to the javascript language not specific to
react.
In a javascript class, the constructor function is the very first function that is
going to be called any time an instance of this class is created. So in other words any time that we create a new instance of the app component and show it on the screen. This constructor function is going to be automatically and instantly called before anything else.
And so that makes it a very good location for us to initialize our state when our component is first
created.

When we define the constructor method it's going to be automatically called with the prop's object.
We have to call a function called super and we have to pass in
the props like so. super(props);

What does the super thing.
Our app component is extending or borrowing functionality from the react component base class:
Class App extends React.Component

This base class has a constructor function of its own that goes through some amount of setup or has
some code inside of it to set up our real component for us when we define a constructor function inside of our app class.

We are essentially overriding or replacing the constructor function that is inside of the
React.Component class. But we still want to make sure that all the set up code inside of React.Component constructor function still gets called.
So to make sure that the parents or React.Component constructor function gets called we call super with props. Super is a reference to the parent's constructor function and that's all it is.


The entire reason we define that constructor function was so that we could initialize our state object. So in order to initialize our state object underneath that super(props); underneath it
this.state = {}; ----> That is state object. It's going to eventually contain some different pieces of data some different properties that are very important and relevant to our component.

We will initialize our state object to include a property called Latitude.

this.state = {lat: null };

To eventually have a number as a property on our state object but we don't have it yet.
We will usually default the value to be no so a value of no means essentially we don't know what the
latitude is it yet we will know eventually but we don't know what it is, so we will assign it to null.

#### Component Lifecycle
-------------------

- Constructor
- render
content visible on screen

- ComponentDidMount
Sit and wait for updates...

- ComponentDidUpdate
Sit and wait until this component is no longer shown

- ComponentWillUnmount


Component lifecycle method is a function that we can optionally define inside of our class based
components if we decide to implement these methods. They will be called automatically by react at certain points during a component's life cycle.

Lifecycle refers to the fact that a component is going to be created and then show up in the DOM or show up on the screen of the browser and then at some point in time we might do something like say call set state which will cause the component to render and then in theory at some point in time a component might be removed from the DOM altogether and stop showing its content on the screen.
That entire series of events is for two as the components life cycle.

So these lifecycle methods are functions that are called during very distinct or discrete times during
that cycle.
We've already seen the constructor function that is a function that we can optionally define if we do
it will be automatically called when a new instance of our component is created.

The render method is not optional which is unlike all the other methods on here.
So the render method is the one function that we absolutely have to define.
Now technically the render method is a lifecycle function.
It gets called at some point during the lifecycle of a component.

So here's what happens.

1. First the constructor method is called
2. Then the render method will be called; we return some amount of JSX which then becomes visible on the screen.

3. Immediately after a component shows up on the screen of our browser a lifecycle method
componentDidMount() is called. This method will be automatically called one time when our component first gets rendered onto the screen.

- After the componentDidMount() method gets called our component essentially will sit around and wait
for an update.

The component will render itself or essentially update itself.

Anytime that happens another lifecycle method is called component did update will be called automatically.

And so once again if we decided we wanted to we could optionally define a function inside if you're

called very specifically component.

Did update if we defined that function it will be called automatically any time that our component updates

itself.

I'm going to leave that one again as well.

Then after that our component might just sit around and wait until it gets another update.

If it gets another update component to it update we'll be called a second time or third time fourth

time.

However many times our component gets updated at some point in time.

We might decide to stop showing this component on the screen.

We'll talk about the scenarios under which that would occur later on inside the course.

So if for some reason we decide to no longer show this method we are asked to meet show this component

the component will unmount method will be automatically called this method will be usually used if we

want to do some kind of cleanup after our component.

And of course We'll discuss when or what scenarios that would occur to get a better understanding of

some of these different lifecycle methods.

I want to implement component did mount and component did update inside of our component and just put

some basic console logs inside there and just say OK yeah these things get automatically called at some

point in time.

So back inside my editor once again right above the render method I'm going to define component did

mount like so.

And inside if you are I'll put a simple console log that says my component will say my component was

rendered to the screen will be really descriptive here.

Like so.

And then underneath that I'm going to define a second life cycle method component did update I'll put

a council log inside of your that says my component was just updated it rerun if I can spell it for

you render it.

There we go.

All right.

Let's then save this and we'll flip back over to a browser and I just want to see these console logs

appear.

All right so I can flip back over and I got to make sure I port my console and we'll see that we already

have the two console logs appear right here.

So the first consul log is from the component.

Did it mount lifecycle method.

It's going to be called automatically any time our component shows up on the screen.

We then saw the component did update method.

It did update method was called because after our geolocation request succeeded or in this case was

denied from me in particular are a component called Set state on itself.

It rebranded itself.

And so the component did update lifecycle method was invoked.

Now one thing I want to mention really quickly here that I did not make tremendously clear on the diagram

is that any time that component did update gets called right before it technically render will be called.

So any time our computer updates the render method will be called will return some GSX that will be

shown on the screen and then right after that component did update will be invoked.

So in general as I mentioned previously the render method is going to be called many many many times.

Anytime we decide to update our component.

All right.

So I'm going to remove those two lifecycle methods right there I just want to give you a quick demonstration.

We are going to re-implement component did mount just a second but we will type that back in when we

decide that we actually need it.

Now let's take a quick pause right here.

I want to very quickly tell you some of the different reasons that we might use these different lifecycle

methods so that you at least have some context and understanding of why we care about these things at

all.

So quick pause and I'll see you in just a minute.


