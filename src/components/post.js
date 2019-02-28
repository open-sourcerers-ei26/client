import React from 'react'
import './Post.css';
import moment from 'moment';

export default ({value, description, gameId, createdAt, userId, id, iScored, comment, image}) => {
  const timeStamp = moment(createdAt).format("MMM Do YYYY, h:mm:ss a")
  const whoScored = iScored
    ? 'You'
    : userId.username
  const showGame = iScored
    ? `in game ${gameId.name}`
    : ''

    return (
      <li className="onePost subcard" key={id}>    
        <p className="gamePost">
         {whoScored} scored {value} points for {description} {showGame} at {timeStamp}.
      </p>
      <p>{comment}</p>
        <img src={image} alt=''></img> 
     </li>
    )
}

