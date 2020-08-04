import React from 'react';
import Card from './Card';

import { useCards } from "./hooks/card-hooks"

//uuid v() use for keys

export default function CardList () {
  const { cards } = useCards();
  if(!cards.length) return (<div> No Cards Listed. (Add a Card) </div>);
  return (
    <div className="card-list">
       
      { cards.filter( (card)=> card.shouldRender).map( (card) => 
        (<Card
        key={card.id}
        {...card}
        />)
       )
      }
    </div>
  );
}




