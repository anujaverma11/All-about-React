var React = require('react');
var Dropdown = require('./dropdown');


var options ={
  title: 'Choose a dessert',
  items: [
  'Apple Pie',
  'Peach Cobbler',
  'Coconut Cream Pie'
  ]
};


// React, please render this class
var element = React.createElement(Dropdown, options); //2. pass the object into createElement

// React, after you render this class, please place it on my document where I suggest
React.render(element, document.querySelector('.container'));