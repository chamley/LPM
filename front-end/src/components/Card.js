

import React from 'react'
import { useCards } from './hooks/card-hooks'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function StandardPost({
  id,
  user_id,
  title,
  text,
  user_name
}) {
  const classes = useStyles();

  //Add later
  //const { saveCard } = useCards();

  return (
    <Card className={classes.root}> 
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="body2">
        {text}
      </Typography>
      <CardActions>
        <Button size="tiny">Save Post</Button>
      </CardActions>
    </Card>
  );
}



// Add later

// const submit = e => {
//   saveCard(title,text);
// }

// <button onClick={()=>submit()} style={{width:10, height:10}}>
// Save Post
// </button>