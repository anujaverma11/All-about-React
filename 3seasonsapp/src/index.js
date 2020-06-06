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
*/

