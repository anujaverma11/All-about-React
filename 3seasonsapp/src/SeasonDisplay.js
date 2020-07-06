import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
 summer: {
  text: "Let's hit the beach",
  iconName: 'sun'
 },
 winter: {
  text: 'Burr, it is chilly',
  iconName: 'snowflake'
 }
};

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
  const {text, iconName} = seasonConfig[season]; //{text, iconName}

  //const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach'; //ternary exp. in JSX
  //const icon = season === 'winter' ? 'snowflake' : 'sun';
  //console.log (season);

  return (
  <div className={`season-display ${season}`}>
    <i className={`icon-left massive ${iconName} icon`} />
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`} />
  </div>
  );
};

export default SeasonDisplay;

/* From Sysmentic-ui get the classname to make the icons bigger
<i class="mini home icon"></i>
<i class="tiny home icon"></i>
<i class="small home icon"></i>
<i class="home icon"></i>
<i class="large home icon"></i>
<i class="big home icon"></i>
<i class="huge home icon"></i>
<i class="massive home icon"></i> */