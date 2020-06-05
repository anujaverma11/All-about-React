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
*/}