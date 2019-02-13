
import React from 'react';
import '../App.css';

export default function SideBarListMyGames(props) {

    let myGames = props.gameInfo.MyGames.map((game,index) => {
        
        //* could add select css here?

        return(
       
          <li key={index}>
            <button value={props.gameInfo.MyGames[index]} onClick={(e)=> props.onSelect(e.currentTarget.value)}>{game}</button>
          </li>
    
          );
 
    });

    

    return (
      <div>
        <ul className="SideBar-lists" id='myGamesList'>
          {myGames}
        </ul>
      </div>
    )

};