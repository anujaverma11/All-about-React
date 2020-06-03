import React from 'react';


{/*using https://semantic-ui.com/views/card.html
Using the technique of passing children to a component and showing the children inside the component inside the parent we ca provide as many children as possible. */}


const ApprovalCard = props => {
  return (
      <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    );
}

export default ApprovalCard;