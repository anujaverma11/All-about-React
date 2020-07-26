import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

/*const App = () => {
  return (
    <div className="ui container" style={{marginTop: '50px'}}>
     {/* class will make the div a little short than page width}
      <SearchBar />
    </div>
    );
}; */


class App extends React.Component {
  state = {images: []};

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term},
    });

    this.setState({images: response.data.results});

    //will give error message "Unhandled Rejection (TypeError): this.setState is not a function"

    /*
    - By chaining on a .then statement to axios - any time we want to use response from some asynchronous request anytime, we are working with Promise.
      }).then((response)=>{
      console.log(response.data.results)

    2nd Method - in fornt of onSearchSubmit function mark it with async keyword.
    This allows to use async - awaits function - what it means is that in front of the network request of axios we are going to put 'await' keyword and assign it to 'response' variable.

    So we have a promise based syntax that uses the 'then' statement that will be called anytime the request, alternatively we can use 'async - await' function.
    */
  }

  render() {
      return (
        <div className="ui container" style={{marginTop: '50px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
          Found: {this.state.images.length} images
          <ImageList images={this.state.images}/>
        </div>
    );
  }
}

export default App;

/*

REACT App --> AJAX Client |---------> Unsplash API
                          <---------|

                          */