import React from 'react'
import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Grid from '@material-ui/core/Grid';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  map:{
    padding:theme.spacing(6),
    
  }
}));


export default function Map({data}) {
    
    const classes = useStyles();
    const mapData =data.mapdatacountry.read();
   
    const [viewport, setViewport] = useState({
        width: "45vw",
        height: "45vh",
        latitude: 30,
        longitude: 70,
        zoom: 3,
      });
    return (
       <Grid container > 

       <Grid item xs={12} md={12} >
           <Grid container justify="center">
           <h1>Map View</h1>
           </Grid>
       </Grid>


       <Grid item xs={12} md={12} >
       <Grid container justify="center" className={classes.map}>
        <div>
            <ReactMapGL 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewport} 
      mapboxApiAccessToken = {"pk.eyJ1IjoiaGFtemEtYWx2aSIsImEiOiJja2J4b3YwZmcwODgyMnpxbjNqajRwMWF5In0.eNG2Xp-V76yb_jHt62l2PA"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        {mapData.data.map((country)=>{
            return <Marker key= {country.country} latitude={country.countryInfo.lat}    
            longitude={country.countryInfo.long}>
            <div>    
            <img src = {country.countryInfo.flag} alt="countries" width = "25px"/>
            <abbr 
            style={{backgroundColor: "red", borderRadius: 20, color: "white" , fontSize: "12px",textDecoration: "none", fontFamily: "Lato",cursor: "Pointer"}}
             title = {`Recovered: ${country.recovered}
Active: ${country.active}
Deaths: ${country.deaths}`}>{country.cases}</abbr>
            </div>
            </Marker>
        }
            
        )}
    </ReactMapGL>
        </div>
        </Grid>
        </Grid>
        </Grid>
    )
}