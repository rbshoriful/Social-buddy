import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';

const Header = () => {
  

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
       <AppBar position="static">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Typography variant="h6" color="inherit">
               All Post
            </Typography>
          </IconButton>
      </AppBar>
      
    </div>
  );
};

export default Header;