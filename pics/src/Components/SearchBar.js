// Controlled Element

import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

//onFormSubmit: function(event){   leads to binding problem
onFormSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(this.state.term) //inside class component refer props as this.props

  //console.log(this.state.term);
}

  render() {
    return (
      <div className = "ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text"
                   value={this.state.term}
                   onChange={e => this.setState ({term: e.target.value}) } />

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