import React from 'react';


import './App.css';

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'
import AddCardForm from './components/AddCardForm'
import AboutPage from './components/AboutPage'

import HelpPage from './components/HelpPage'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';




import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


//router import
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Card } from '@material-ui/core';




const navBarStyle = {
  display:'flex',
  justifyContent:'space-evenly'
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

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <div className={classes.root}>
        <CssBaseline/>
        <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Typography>
          Welcome to Pet Safe
          <br></br>
          <small>Please don't forget be as detailed as possible in your location description!</small>
          <div className="headerRectangle" style={navBarStyle}>
            <SearchBox/>
            <Link to="/" style={{color:'white'}}> Declare a Pet </Link>
            <Link to="/aboutPage" style={{color:'white'}}> How does this work? </Link>
            <Link to="/helpUs" style={{color:'white'}}> Help the Project </Link>
        </div>
        </Typography>
        </Toolbar>
        </AppBar>
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


export default App;



// <Grid container spacing={3}>
// <Grid item xs={6}>
//   <CardList/>
// </Grid>
// <Grid item xs={6}>
//  <Drawer
//       className={classes.drawer}
//       variant="permanent"
//       classes={{
//         paper: classes.drawerPaper,
//       }}
//       anchor="right">

//       </Drawer>
//     </Grid>
//   </Grid>