import React from 'react';


import './App.css';

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import AddCardForm from './components/AddCardForm'
import AboutPage from './components/AboutPage'

import HelpPage from './components/HelpPage'

import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';




import CssBaseline from '@material-ui/core/CssBaseline';

import Divider from '@material-ui/core/Divider';


//router import
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" className={classes.appBar} style={stylesheet.appBar} >
          <Typography style={stylesheet.header}> Welcome to Pet Safe </Typography>
          <br></br>
          <div style={stylesheet.navBarStyle}>
            <SearchBox/>
            <Link to="/" style={{color:'inherit'}}> Declare a Pet </Link>
            <Link to="/aboutPage" style={{color:'inherit'}}> How does this work? </Link>
            <Link to="/helpUs" style={{color:'inherit'}}> Help the Project </Link>
          </div>
        </AppBar>
        <div style={stylesheet.page}>
          <main className={classes.content}>
            <div className={classes.toolbar} />        
            <Typography paragraph>
              <CardList/>
            </Typography>
          </main>
          <Drawer   
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
            anchor="right"
            >
            <div className={classes.toolbar} />
            <Divider/>
              <Switch>
                <Route exact path='/'>
                  <RenderForm/>
                </Route>
                <Route path='/aboutPage'>
                  <RenderAbout/>
                </Route>
                <Route path='/helpUs'>
                  <RenderHelp/>
                </Route>
              </Switch>    
            </Drawer>
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
  );
}

function RenderAbout() {
  return (
    <div className="aboutPage">
      <AboutPage/>
    </div>
  )
}

function RenderHelp() {
  return (
    <div className="helpUs">
      <HelpPage/>
    </div>
  );
}

const stylesheet = {
  header:{
    padding:20,
    fontSize:30
  },
  appBar: {
  },
  navBarStyle: {
    display:'flex',
    justifyContent:'space-around',
    padding:10
  },
  page:{
    padding:10
  }
}

const drawerWidth = 340;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default App;

