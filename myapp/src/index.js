// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom'

// Create a react component
function getButtonText() {
return 'Click on Me again!'
}


const App = () => {
  const buttonText = {text: 'Click Me!'};
  const labelText = "Enter name:"
  return (
   <div>
      <label className = "label" htmlfor="name" >{labelText}</label> {/*interpolation*/}
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
      {/*Submit*/}
      {buttonText.text}
      </button>

      <button style={{backgroundColor: 'yellow', color: 'black'}}>
      {/*Submit*/}
      {getButtonText()}


      </button>
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


// Class is JS keyWord and hence during using JSX HTML class will become JSX className.

//JSX can referenceJS Variables.
/* */

{/*  Values can be references inside JSX */}
//Objects cannot be used as REACT Child.We can reference the object along with the Key as shown in example above. We can use JS object as long as we are not trying to print them as text, as shown in example buttonText, inside the application

{/*  Communicating with Props */}
/*
- Component Nesting - component can be shown inside others


- Component Re-usability - component can easily be reusable
- component Configuration - configure a component when it is created.
