

import React from 'react'

import { useCards } from './hooks/card-hooks'



export default function Card({
  id,
  user_id,
  title,
  text,
  user_name
}) {

  const { saveCard } = useCards();

  const submit = e => {
    saveCard(title,text);
  }

  return (
    <div className="card">
      <div className="title"><b>{title}</b></div>
      <div className="text">{text}</div>
      <button onClick={()=>submit()} style={{width:10, height:10}}>
        Save Post
      </button>

    </div>
  );
}