var Todo = React.createClass({displayName: "Todo",
  edit: function(){

  },

  remove: function(){},

  render: function() {
    return(


        React.createElement("ul", null, 
          React.createElement("li", {className: "todo"}, 
            React.createElement("span", {onClick: this.edit}, 
              this.props.children
            ), 

            React.createElement("button", {className: "btn btn-default btn-sm glyphicon glyphicon-trash"})


          )
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
                React.createElement("ul", null, 
                React.createElement(Todo, null, "Call Henry"), 
                "// ", React.createElement(Todo, {todo: "Call Henry"}), 
                "// ", React.createElement(Todo, {todo: "Call Henry"})
                )
              ), document.getElementById('todo'));