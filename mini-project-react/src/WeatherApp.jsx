import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
       city:"delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    let upadtedInfo =(newInfo)=>{
        setWeatherInfo(newInfo); 
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Delta</h2>
            <SearchBox upadtedInfo={upadtedInfo}/>
            <InfoBox info={weatherInfo }/> 
        </div>
    );
}