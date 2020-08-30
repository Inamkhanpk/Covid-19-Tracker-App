import React ,{Suspense,useState} from 'react';
import Header from './components/Header/Header'
import CovidCard from './components/CovidCard/CovidCard'
import CountryPicker from './components/CountryPicker/CountryPicker'
import Chart from './components/Chart/Chart'
import Footer from './components/Footer/Footer'
import Info from './components/Info/Info'
//import Map from './components/Map/Map'
import createResource from "./API/api.js";
import {fetchData} from './API/api.js'
import './App.css'

function App (){
  const [country, setCountry] = useState();
  const fetchedData = createResource(country);
  
  const handleCountryChange = async (country) => {
     await fetchData(country);
    setCountry(await country);
  };

  
  
 
  return (
    <div >
     <Suspense  fallback={<h1>Loading...</h1>}>
     
     <Header/>
     <Info/>
     <CountryPicker data={fetchedData} handleCountryChange={handleCountryChange}/>
     <CovidCard data={fetchedData} />
     <Chart data={fetchedData} country={country} />
     {/* <Map data={fetchedData}/> */}
     <Footer/>
     
     </Suspense>
    </div>
  );


}

export default App;
