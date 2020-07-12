import React from 'react';
import SearchBar from './SearchBar';

const App = () => {
  return (
    <div className="ui container" style={{marginTop: '50px'}}>
     {/* class will make the div a little short than page width*/}
      <SearchBar />
    </div>
  );
};

export default App;