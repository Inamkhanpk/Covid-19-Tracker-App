import React from 'react'
import logo from './../../images/logo.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  headerbg:{
    backgroundColor:'#cc33ff'
  }
}));

const Header = () =>{
  const classes = useStyles();
    return(
        <div >
      <AppBar position="static">
        <Toolbar className={classes.headerbg}>
          <IconButton edge="start"  color="inherit" aria-label="menu">
          <img src={logo} width="30" height="30" className="d-inline-block align-top " alt=""/>
          </IconButton>
          <Typography variant="h6" >
            Covid-19
          </Typography>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Header;