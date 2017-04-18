var Todo = React.createClass({

  getInitialState: function(){
    return {editing: false}
  },
  edit: function(){
    alert('edit Todo');
    this.setState({editing:true})
  },

  remove: function(){
    alert('Todo removed');
  },

  save:function(){
    alert('Todo saved');
  },

  todoDisplay:function(){
    return(
      <li className="todo">
            <span onClick={this.edit}>
              {this.props.children}
            </span>

            <button onClick={this.remove} className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" />
      </li>
      );
  },

  todoForm:function(){
    return(
      <li className="todo">
            <span>
              <input type="text" placeholder="Edit Todo" defaultvalue={this.props.children}/>
            </span>

            <button onClick={this.save} className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right" />
      </li>);
  },

  render: function() {
     if(this.state.editing){
        return this.todoForm();
     } else {
        return this.todoDisplay();
     }
  },
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
                <Todo>Call Henry</Todo>
                <Todo>Call Henry</Todo>
                </ul>
              </div>, document.getElementById('todo'));