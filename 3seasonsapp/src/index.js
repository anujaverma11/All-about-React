import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
// In JS class the constructor function is called anytime an instance of this class is created.
//Anytime an instance is created the constructor function is automatically called before anything else, so it is a good place to initialize the state

   /*  **************************
   constructor(props){ //constructor function belongs to JS. It is called when a new instance is created.
      super(props); //to make sure JS constructor function of React.component is called we call Super function. when we define the constructor function we are basically overriding the React.comp function. To make sure that we can use all properties of React.comp we call super class.

      this.state = { lat: null, errorMessage: '' }; //this is state object initialized. null tells that we don't know the value yet. state must be initialized when a component is created. Never assign state object directly to update state.

      // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

   } */
   state = { lat: null, errorMessage: '' };

   componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      //never do the direct assignment to the state function. We can only update state using the setState function.
      position => this.setState({lat: position.coords.latitude}),
      err => this.setState ({errorMessage: err.message})

    );
   }

   renderContent(){
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

   if (!this.state.errorMessage && this.state.lat) {
      console.log(this.state.lat)
      return <SeasonDisplay lat={this.state.lat}/>
      //<div>Latitude: {this.state.lat}</div>;
    }

    return <Spinner message="Please accept location request"/>; //›passing message to props
   }


  // React says we have to define Render!
  render() {
    return (
      <div className = "border red">
        {this.renderContent()}
      </div>
      );
   }

}

ReactDom.render(<App />, document.querySelector('#root'));

/*
1. JS File loaded by browser
2. App component gets created
3. We call geolocation service - getting this result take some time.
4. App returns JSX, gets rendered to page as HTML - With functions we dont have any good way of rendering the latitude on the page as the location is taking time and app already returned the component.
5. We get results of geolocation

Rules of Class Components
 - Must be A Javascript Class
 - Must extend (subclass) React.Component
 - Must define a 'render' method that returns some amount of JSX


*/

