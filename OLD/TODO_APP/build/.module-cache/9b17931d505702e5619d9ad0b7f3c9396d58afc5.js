var Todo = React.createClass({displayName: "Todo",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, " Things To Do ")
      )
      )
  }
});

React.render(React.createElement(Todo, null), document.getElementById('todo'));