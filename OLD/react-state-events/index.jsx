render: function(){
  var visible;

  if(this.state.dropdown){
    visible = "visible";
  } else{
    visible = "hidden";
  }

  return <div class="dropdown">
    <Badge />
    <unorderedList />
  </div>
}