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