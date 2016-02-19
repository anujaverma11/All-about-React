// This purpose of this file is bascically bootstrap or do the initial definations and rendering of our top level components. Actually start the kickoff our application.

var options ={
  thumbnailData: [
    {
      title: "See Tutorials",
      number: 32,
      imageURL: "http://formatjs.io/img/react.svg",
      heading: "Learn React",
      description: "React is a fantastic new library for making fast, dynamic pages."
    },{
      title: "See Tutorials",
      number: 25,
      imageURL: "http://www.chloechen.io/wp-content/uploads/2015/07/gulp.png",
      heading: "Learn Gulp",
      description: "Gulp will speed up your development time."
    }
  ]
};


// React, please render this class
var element = React.createElement(ThumbnailList, options); //2. pass the object into createElement

// React, after you render this class, please place it on my document where I suggest
ReactDOM.render(element, document.querySelector('.target'));
var Badge = React.createClass({displayName: "Badge",
  render: function(){
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
      this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});
// NESTING COMPONENT HERE
var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function(){
    return React.createElement("div", {className: "thumbnail"}, 
      React.createElement("img", {src: this.props.imageURL}), 
      React.createElement("div", {className: "caption"}, 
        React.createElement("h3", null, this.props.heading), 
        React.createElement("p", null, this.props.description), 
        React.createElement("p", null, 

          React.createElement(Badge, {title: this.props.title, number: this.props.number})
        )
      )
    )
  }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function(){
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
    list
    )

  }
});