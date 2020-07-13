// Uncontrolled Element

import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event){
    {/*As soon as someone type anyting in the text box, onInputchange function is called and pass the event object to the function. Its a JS object, which contains knowledge of event just occurred*/}
    console.log(event.target.value);

  }

  render() {
    return (
      <div className = "ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}/>
                  {/*onChange is a event handler this.onInputChange callback function, so no parenthesis.
                  onChange is called when a User changes text in an input.
                  onClick is called when a User clicks on something
                  onSubmit is called when a User submits a form  */}
            {/* Alternative event handler way (to make it single line of code),
            (event) can be abb to (e) and then use it as console.log(e.target.value)
            <input type="text" onChange={(event) => console.log(event.target.value)} />*/}

          </div>
        </form>
      </div>
      );
  }
}



export default SearchBar;