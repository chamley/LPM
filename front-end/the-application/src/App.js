import React from 'react';


import './App.css';

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import AddCardForm from './components/AddCardForm'

function App() {
  return (
    <div className="App">
      <div>Bienvenue au Marché Senegal !! </div>
      <div> N'oublié pas d'ajouter votre numéro Whatsapp/Télégram a votre offre! </div>
      <div className="header rectangle" style={ {backgroundColor:'blue'}}>
        <SearchBox/>
      </div>
      <div className="mainPage">
        <div className="LHS" style={ {backgroundColor:'lightblue'}}>
          <CardList/>
        </div>
        <div className="RHS" style={ {backgroundColor:'grey'}}>
          <AddCardForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
