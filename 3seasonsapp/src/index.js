import React from 'react';
import ReactDom from 'react-dom'




class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));

{/*
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
*/}

Rules of State