import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
  fotter:{
      backgroundColor:'#9933ff',
      }
}));

const Footer = () =>{
    const classes = useStyles();
    return(
        <div>
            <Grid container className={classes.fotter}>
                <Grid item xs={12} md={12}>
                    <Grid container justify="center">
                    Made by Inam Khan
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;