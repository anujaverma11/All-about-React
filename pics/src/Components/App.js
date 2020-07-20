import React from 'react';
import axios from 'axios'; //same as Fetch, 3rd party tool
import SearchBar from './SearchBar';

/*const App = () => {
  return (
    <div className="ui container" style={{marginTop: '50px'}}>
     {/* class will make the div a little short than page width}
      <SearchBar />
    </div>
    );
}; */


class App extends React.Component {
  onSearchSubmit(term){
    console.log(term);
  }

  render() {
      return (
        <div className="ui container" style={{marginTop: '50px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
    );
  }
}

export default App;

/*

REACT App --> AJAX Client |---------> Unsplash API
                          <---------|

                          */