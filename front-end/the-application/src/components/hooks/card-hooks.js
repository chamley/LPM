import React, {createContext, useState, useContext } from "react";
import cardData from "../../data/mock-data.json";
import { v4 } from "uuid";


const CardContext = createContext();
export const useCards = () => useContext(CardContext);


export function CardProvider ({
    children
  }) {
  const [cards, setCards] = useState(cardData);

  const addCard = (title, text) => {
    setCards([
      ...cards,
      {
        id:v4(),
        user_id:v4(),
        title,
        text,
        user_name:v4()
      }
    ]);
  }

  const textSearch = (text) => {
    setCards(cards.map( (card) => { 
      const newCard = { 
        ...card,
        shouldRender:matchesText(card,text)
       };
      return newCard;
    }));
  }



  const matchesText = (card, text) => {
    const s = card.text+card.title;
    return s.includes(text);
  }


  // const rateColor = (id, rating) => {
  //   setColors(colors.map(color=> (
  //     color.id === id
  //     ? {...color,rating}
  //     : color))
  //   );
  // }

  // const removeCard = (id) => {
  //   setColors(colors.filter(color=>color.id !==id));
  // }

  return (
    <CardContext.Provider value={{ cards, addCard, textSearch }}>
      {children}
    </CardContext.Provider>
  );
}