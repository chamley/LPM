import React from 'react';


import './App.css';

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'


function App() {
  return (
    <div className="App">
      <div className="header rectangle">
        <SearchBox/>
      </div>
      <div className="LHS">
        <CardList/>
      </div>
      <div className="RHS">
      </div>
    </div>
  );
}

export default App;
