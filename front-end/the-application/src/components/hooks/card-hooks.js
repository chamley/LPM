import React, {createContext, useState, useContext, useEffect} from "react";

import { v4 } from "uuid";


const CardContext = createContext();
export const useCards = () => useContext(CardContext);



export function CardProvider ({
    children
  }) {

  const [cards, setCards] = useState([]);

  const loadData = async function () {
    fetch('http://localhost:3001/getAllCards', {
      method:'GET',
      mode:'cors',
    })
    .then( res=> res.json())
    .then(res=> setCards(res.map( (card => {
      const readyCard = {
        ...card,
        shouldRender:true
      }
      return readyCard;
    }))))
    .catch( e => console.log(`error: ${e}`));
    ;
  }

  useEffect( () => {
    loadData();
  },[])


  const addCard = (title, text) => {
    const newCard = {
      id:v4(),
      user_id:v4(),
      title,
      text,
      user_name:v4(),
      posted_at: new Date().toString()
    }

    fetch('http://localhost:3001/addCard', {
      method: 'POST',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newCard)
    })
    .then( res => console.log('here',res))
    .catch( e => console.log(`error: ${e}`))

    setCards([
      ...cards,
      {...newCard,
        shouldRender:1
      }
    ]);
  }

  const textSearch = (text) => {
    setCards(cards.map( (card) => {
      const newCard = { 
        ...card,
        shouldRender: matchesText(card,text)
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