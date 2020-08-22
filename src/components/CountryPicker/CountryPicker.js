import React from 'react'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
  tfield:{
    width:"30%",
    }
}));

const Countries = ({ data, handleCountryChange }) => {
  const classes = useStyles();
  const countriesList = data.countries.read();

return(

        <Grid container>
          
            <Grid item xs={12} md={12}>
             <Grid container justify="center">
               <h1 >Search Country</h1>
              </Grid>
            </Grid>

            <Grid item xs={12} md={12}>
              <Grid container justify="center">
                 <FormControl  className={classes.tfield}>
                  <InputLabel id="demo-customized-select-label">Global</InputLabel>
                   <Select
                   labelId="demo-customized-select-label"
                   onChange={(e)=>handleCountryChange(e.target.value)}
                   >
                   {countriesList.map((country, i) => 
                     <MenuItem key={i} value={country}>{country}
                    </MenuItem>)}
                   </Select>
                 </FormControl>
                </Grid>
             </Grid>

       </Grid>
    )
}

export default Countries
