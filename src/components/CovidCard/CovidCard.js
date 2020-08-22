import React  from 'react'
import CountUp from 'react-countup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  
  pad:{
    padding:theme.spacing(2)
   },
  
  confirmed: {
    margin:theme.spacing(2),
    borderBottom: '5px solid rgba(255, 115, 0, 0.5)',
     '&:hover':{
      boxShadow: '2px 2px 10px rgba(255, 115, 0, 0.5)'
     },
    
   },
  recovered:{
     margin:theme.spacing(2),
     borderBottom: '5px solid rgba(0, 255, 0, 0.5)',
      '&:hover':{
       boxShadow: '2px 2px 10px rgba(0, 255, 0, 0.5)' 
      }
   },
  death:{
     margin:theme.spacing(2),
     borderBottom: '5px solid rgba(255, 0, 0, 0.5)',
      '&:hover':{
       boxShadow: '2px 2px 10px rgba(255, 0, 0, 0.5)'
     }
    }
}));


 const CardCovid = ({data}) =>{
   
  const classes = useStyles();
   const {confirmed,recovered,deaths,lastUpdate} = data.users.read();
  
   return( 
      <Grid container   className={classes.pad}>
       
      <Grid item xs={12} md={12}>
        <Grid container justify="center">
         <h1>Current Situation Of Global Pandemic</h1>
        </Grid>
      </Grid>

      < Grid item xs={12} md={4}> 
        <Card className={classes.confirmed}>
         <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of active cases of COVID-19.
            </Typography>
          </CardContent>
       </Card>
      </Grid>
       
      <Grid item xs={12} md={4}>
        <Card className={classes.recovered} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5" component="h2">
             <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of Recovered cases of COVID-19.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

     <Grid item xs={12} md={4}>
        <Card  className={classes.death}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
              Number of death cases of COVID-19.
            </Typography>
          </CardContent>
       </Card>
    </Grid>
</Grid>
      
    )
}

export default CardCovid