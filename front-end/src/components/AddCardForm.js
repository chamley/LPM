
import React, { useState } from 'react';
import { useCards } from './hooks/card-hooks';



export default function AddCardForm() {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { addCard } = useCards();

  const submit = e=> {
    e.preventDefault();
    addCard(title, text);
    setTitle("");
    setText("");
  };
  return(
    <div>
      <form onSubmit={submit} style={{margin:'100px'}}>
        <p>
          <input
            value={title}
            onChange={e=>setTitle(e.target.value)}
            type="text"
            placeholder="nearest town/city .."
            required
          />
        </p>
        <p>
          <input
            value={text}
            onChange={e=>setText(e.target.value)}
            type="textarea"
            style= { {width:300, height:150}}
            placeholder="description/address .."
            required
          />
        </p>
        <p>
          <button>
            Declare
          </button>
        </p>
      </form>
    </div> 
  );
}


/*
    "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
    "user_id":"asdfd1f0-a8c6-41bf-8d02-df5734d829a4",
    "title": "ball",
    "text": "this is my favorite ball",
    "user_name": "johnny",
    "shouldRender":true
*/