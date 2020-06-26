import React from 'react';

//getSeason Function
const getSeason = (lat, month) => {
 if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  //console.log(props.lat)
  const season = getSeason(props.lat, new Date().getMonth()); // Calling getSeason function
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'; //ternary exp. in JSX
  //console.log (season);

  return (
  <div>
    {text}
  </div>
  );
};

export default SeasonDisplay;