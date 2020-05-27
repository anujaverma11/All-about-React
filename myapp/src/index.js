// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react component


const App = () => {
  return (
   <div>
      <label class = "label" for="name" >Enter name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
    </div>
    );
};


//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'))

// Notes: When we write 2015/2016 code we do not ship it down directly to users, because the browser may not support that. Babel converts 2015/2016 code to normal ES05 JS code. Babel processes the JSX as well. Browsers don't understand JSX code.

// NOTES
// Converting HTML to JSX
/*
<div>
  <label class = "label" for="name" >Enter name:</label>
  <input id="name" type="text" />
  <button style={{"background-color: blue; color: white;">Submit</button>
</div>
*/

//HTML custom styling converted to JSX

/* HTML
<div style="background-color: blue; color: white;"></div>

JSX
<div style={{ backgroundColor: 'red'}}></div>
first {  is indicator JS variable and second { indicate JS object. so we are providing JS object. */
