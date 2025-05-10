import React from 'react'
import { useState } from 'react';
export default function Card(props) {
    const [likes,setLikes] = useState(0)

    function incLikes(){
        setLikes(likes+1);
    }

    function randomfun(){
        console.log('random function ran');
    }

    randomfun()

  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button  onClick={incLikes}>{likes} Likes</button>
    </div>
  )
}
