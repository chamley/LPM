import React from 'react';


import './App.css';

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import AddCardForm from './components/AddCardForm'
import AboutPage from './components/AboutPage'

//router import
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div> Welcome to Pet Declare </div>
        <div> Please don't forget be as detailed as possible in your location description </div>
        <div className="header rectangle" style={ {backgroundColor:'grey'}}>
          <SearchBox/>
          <Link to="/">Declare</Link>
          <Link to="/About">How does this work?</Link>
        </div>
        <div className="mainPage">
          <div className="LHS" style={ {backgroundColor:'lightblue'} }>
            <CardList />
          </div>
          <div className="RHS" style={ {backgroundColor:'grey'} }> 
            <Switch>
              <Route exact path = "/">
                <RenderForm/>
              </Route>
              <Route exact path="/about">
                <RenderAbout/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

function RenderForm() {
  return (
    <div className="declarePet">
      <AddCardForm/>
    </div>
  )
}

function RenderAbout() {
  return (
    <div className="aboutPage">
      <AboutPage />
    </div>
  )
}


export default App;
