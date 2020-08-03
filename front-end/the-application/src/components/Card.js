

import React from 'react'

//import { useCards } from './hooks/card-hooks'

export default function Card({
  id,
  user_id,
  title,
  text,
  user_name
}) {
  return (
    <div className="card">
      <div className="title"><b>{title}</b></div>
      <div className="text">{text}</div>
    </div>
  );
}