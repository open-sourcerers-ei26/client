import React from 'react';
import './gameLeaderboard.css';


export default function GameLeaderboardListPlayers(props) {

  //Access the players in current game selected

  //Determine rank based on player score

  //Sort player from Highest ot Lowest

  //Return Sorted list

  //For First, Second, Third highlight

  //List all other players after

console.log('here? ',props.selectedGame.participants); 

let rankedPlayersListItem = <p>No Players Yet</p>;  

if(props.selectedGame) {

  console.log('here? ',props.selectedGame.participants);
/*
  if(this.props.selectedGame.participants.length !== 0){

///  

//note this is based on an object structure of participants[{score:55},{score:11},{score:22}] etc...
let playerArrSorted = quickSort(props.selectedGame.participants);

///
//-->> Quick Sort stuff -->>
   
    let count = 0;
  
    function quickSort(array, start=0, end=array.length){
  //finished

  if (start >= end) {
    return array;
  }

  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;

    }

    function swap(array, i, j){
  const tmp = array[i].score;
  array[i].score = array[j].score;
  array[j].score = tmp;
    }

    function partition(array, start, end) {
  //let count = 0;
  const pivot = array[end - 1].score;//5
  let j = start;//0
  for (let i=start; i<end - 1; i++) {
    count = count + 1;
    if (array[i].score >= pivot) { 
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  
  return j;
    }

  //-->> Quick Sort stuff
///


  //index 1-3
  rankedPlayersListItem = playerArrSorted.map((player,index) => {
      
    if(index < 3){

      //let playerName =  // access the users list by id

      let placer = '';
      let bar = null;

      if(index === 0){placer='1st'}
      if(index === 1){placer='2nd'}
      if(index === 2){
        placer='3rd';
        bar = <hr/>;
      }

      //first, second, third
      return(
        <li key={index}>
          <button>{placer} Place: {player.username} &nbsp;&nbsp; Score: {player.score}</button>
          {bar}
        </li>
        
      );
    }
    else{
      
      //everything past 3rd place...
      return(
         
        <li key={index}>
          <button>Rank:{index + 1} {player.username} &nbsp;&nbsp; Score: {player.score}</button>
        </li>
      );
    }
  }); 


  ///

}//outer 2
*/

}//outer

  return (

    <div>
      <ul id='gameLeaderboardListPlayers' className='gameLeaderboard-lists'>
       {rankedPlayersListItem}
      </ul>
    </div>

  )
 
};