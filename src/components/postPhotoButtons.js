import React from 'react';
import './Post.css'

export default function(props){
  return(
    <div className="addphoto">
      <label htmlFor='single'>Add Photo</label>
      <input type='file' id='single' className="inputfile" onChange={props.onChange} />  
    </div>
  )
}