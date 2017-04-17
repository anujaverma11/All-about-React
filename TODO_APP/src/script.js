var Todo = React.createClass({
  edit: function(){

  },

  remove: function(){

  },

  todoDisplay:function(){

  },

  todoDisplay
  render: function() {
    return(


        <ul>
          <li className="todo">
            <span onClick={this.edit}>
              {this.props.children}
            </span>

            <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />


          </li>
        </ul>



      )
  }
});

React.render( <div>
                <h1> Things To Do </h1>
                <div className="form-inline">
                  <div className="form-group">
                    <input className="form-control" placeholder="Add Todo" />
                    <button className="btn btn-default btn-sml">+</button>
                  </div>
                </div>
                <ul>
                <Todo>Call Henry</Todo>
                // <Todo todo="Call Henry"/>
                // <Todo todo="Call Henry"/>
                </ul>
              </div>, document.getElementById('todo'));