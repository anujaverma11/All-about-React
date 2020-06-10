import React from 'react';
import ReactDom from 'react-dom'




class App extends React.Component {
// In JS class the constructor function is called anytime an instance of this class is created.
//Anytime an instance is created the constructor function is automatically called before anything else, so it is a good place to initialize the state

   constructor(props){
      super(props); //to make sure constructor function of React.component is called we call Super function.

      this.state = { lat: null }; //this is state object initialized. null tells that we dont know the value yet.
      window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude}) //never do the direct assignment to the state function.
      },
      err => console.log(err)
    );
   }

  // React says we have to define Render!
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));

/*
1. JS File loaded by browser
2. App component gets created
3. We call geolocation service
4. App returns JSX, gets rendered to page as HTML
5. We get results of geolocation

Rules of Class Components
 - Must be A Javascript Class
 - Must extend (subclass) React.Component
 - Must define a 'render' method that returns some amount of JSX

Rules of State
- Only usable with Class Components
- You will confuse props with state
- 'State' is a JS object that contains data relevant to a component to (almost)instantly rerender
- State must be initialized when a component is created.
- State can only be updated using the function 'setState'

All the steps:
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


git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch node_modules/puppeteer/.local-chromium/mac-756035/chrome-mac/Chromium.app/Contents/Frameworks/Chromium Framework.framework/Versions/83.0.4103.0/Chromium Framework'



*/

