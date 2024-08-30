import '../css/style.css'
import {fetchWeatherData, consolidateWeatherData } from './weather-data';
import {appController} from './app-controller'
import clearDay from '../img/clear-day.png'
import clearNight from '../img/clear-night.png'
import cloudy from '../img/cloudy.png'
import fog from '../img/fog.png'
import hail from '../img/hail.png'
import partlyCloudyDay from '../img/partly-cloudy-day.png'
import partlyCloudyNight from '../img/partly-cloudy-night.png'
import rainSnowShowersDay from '../img/rain-snow-showers-day.png'
import rainSnowShowersNight from '../img/rain-snow-showers-night.png'
import rainSnow from '../img/rain-snow.png'
import rain from '../img/rain.png'
import showersDay from '../img/showers-day.png'
import showersNight from '../img/showers-night.png'
import sleet from '../img/sleet.png'
import snowShowersDay from '../img/snow-showers-day.png'
import snowShowersNight from '../img/snow-showers-night.png'
import snow from '../img/snow.png'
import thunderRain from '../img/thunder-rain.png'
import thunderShowersDay from '../img/thunder-showers-day.png'
import thunderShowersNight from '../img/thunder-showers-night.png'
import thunder from '../img/thunder.png'
import wind from '../img/wind.png'




(async () => {
    let manhattan = await consolidateWeatherData("manhattan");
    console.log(manhattan.weatherDataFahrenheit)
    console.log(manhattan.getPrecipProb());
    console.log(clearDay)
    
    
})();



appController();