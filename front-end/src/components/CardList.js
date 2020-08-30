import React from 'react';
import StandardPost from './Card';

import { useCards } from "./hooks/card-hooks"

//uuid v() use for keys

export default function CardList () {
  const { cards } = useCards();
  if(!cards.length) return (<div> No Cards Listed. (Add a Card) </div>);
  return (
    <div className="card-list">
       
      { cards.filter( (card)=> card.shouldRender).map( (card) => 
        (<StandardPost
        key={card.id}
        {...card}
        />)
       )
      }
    </div>
  );
}




