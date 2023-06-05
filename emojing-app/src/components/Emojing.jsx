import React from "react";

function Emojing(props){
     return (
          <div className="term">
          <dt>
          <p>{props.id}</p>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
          {props.meaning}
          </dd>
        </div>
     )
}

export default Emojing;