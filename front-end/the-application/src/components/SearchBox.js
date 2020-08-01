
import React, { useState, useEffect } from 'react';
import { useCards } from './hooks/card-hooks';



export default function SearchBox () {

  const { textSearch } = useCards();

  const [text, setText] = useState("");
  
  
  useEffect(() => { 
    textSearch(text);
   }, [text])
  

  const [checked, setChecked] = useState(false);

  useEffect(()=> {
    textSearch('tomato');
  }, [checked] )

  return(
    <div>
      <input
        value={text}
        onChange={event =>setText(event.target.value)}
        type="text"
        placeholder="Que cherchez-vous?"
        required
      />
      <input 
      type="checkbox"
      name="mycheckbox"
      checked={checked}
      onChange={ev=>setChecked(ev.target.checked)}
      />
    </div>
  );



}