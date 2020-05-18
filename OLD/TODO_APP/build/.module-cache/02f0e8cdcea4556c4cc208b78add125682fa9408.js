var Todo = React.createClass({displayName: "Todo",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, " Things To Do "), 
        React.createElement("div", {className: "form-inline"}, 
          React.createElement("div", {className: "form-group"}, 
            React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
            React.createElement("button", {className: "btn btn-default btn-sml"}, "+")
          )
        ), 

        React.createElement("ul", null, 
          React.createElement("li", {className: "todo"}, "Call Henry"), 
          React.createElement("li", {className: "todo"}, "Pay Phone Bill")
        )


      )
      )
  }
});

React.render(React.createElement(Todo, null), document.getElementById('todo'));