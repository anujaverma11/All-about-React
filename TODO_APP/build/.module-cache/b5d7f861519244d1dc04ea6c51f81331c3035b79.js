var Todo = React.createClass({displayName: "Todo",
  render: function() {
    return(


        React.createElement("ul", null, 
          React.createElement("li", {className: "todo"}, this.props.todo)
        )



      )
  }
});

React.render( React.createElement("div", null, 
                React.createElement("h1", null, " Things To Do "), 
                React.createElement("div", {className: "form-inline"}, 
                  React.createElement("div", {className: "form-group"}, 
                    React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
                    React.createElement("button", {className: "btn btn-default btn-sml"}, "+")
                  )
                ), 

                React.createElement(Todo, {todo: "Call Henry"}), 
                React.createElement(Todo, {todo: "Call Henry"}), 
                React.createElement(Todo, {todo: "Call Henry"})
              ), document.getElementById('todo'));