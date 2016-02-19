var Badge = require('badge');

var Thumbnail = React.createClass({
  render: function(){
    return <div className="thumbnail">
      <img src={this.props.imageURL} />
      <div className="caption">
        <h3>{this.props.heading}</h3>
        <p>{this.props.description}</p>
        <p>

          <Badge title={this.props.title} number={this.props.number} />
        </p>
      </div>
    </div>
  }
});