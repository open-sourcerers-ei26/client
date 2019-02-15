import React from 'react';
import './gameRulesList.css';

export default function GameRulesList(props) {

    let gameRuleItem = props.selectedGameRules.map((gameRule,index) => {
        
        //* could add select css here?

        return(
       
          <li key={index}>
            <p>Rule #{index + 1}: &nbsp; {gameRule}</p>
          </li>
    
          );
 
    });
 
    return (
      <div>
        <ul className="SideBar-lists" id='myGamesList'>
          {gameRuleItem}
        </ul>
      </div>
    )

};
