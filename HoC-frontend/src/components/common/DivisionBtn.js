import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
    width: 500,
  },
}));

export default function OutlinedButtons(props) {
  const classes = useStyles();

  return (
    <div
      style={{ display: 'inline-block', marginTop: 20, marginAuto: '0 auto' }}
    >
      <Button className={classes.root} variant="outlined" color="primary">
        {props.children}
      </Button>
    </div>
  );
}
