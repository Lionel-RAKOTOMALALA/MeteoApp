import { Text, View,Alert } from "react-native"
import { s } from "./Home.style";
import {requestForegroundPermissionsAsync,
       getCurrentPositionAsync} from 'expo-location';
import { useEffect, useState } from "react";
import { MeteoAPI } from "../../api/meteo";
import { Txt } from "../../components/Txt/Txt";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../services/meteo-service";

export function Home({}) {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const currentWeather = weather?.current_weather;
  useEffect(()=>{
    getUserCoords()
  },[])
  useEffect(()=>{
    if(coords){
      fetchWeather(coords);
      fetchCity(coords);
    }
  },[coords])
  async function getUserCoords(){
   let {status} =  await requestForegroundPermissionsAsync();
    if(status == "granted"){
      const location = await getCurrentPositionAsync();
      setCoords({lat: location.coords.latitude, 
        lng: location.coords.longitude,
      });
      
    }else{
      setCoords({lat: "48.85", lng: "2.35"})
    }
     }
  console.log(coords);

  async function fetchWeather(coordinates){
     const weatherResponse = await MeteoAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse)
  }
  async function fetchCity(coordinates){
    const cityResponse = await MeteoAPI.fetchCityFromCoords(coordinates);
    setCity(cityResponse);
  }

  console.log(city);
  console.log(weather);
  
    return currentWeather ? ( 
    <>
      <View style={s.meteo_basic}>
       <MeteoBasic 
       city = {city}
       interpretation = {getWeatherInterpretation(
        currentWeather.weathercode
        )}
       temperature={Math.round(currentWeather?.temperature)}/>
       
      </View>
      <View style={s.searchbar}></View>
      <View style={s.meteo_advanced}></View>
    </>
    ) : null;  
}
  