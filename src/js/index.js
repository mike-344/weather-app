import '../css/style.css'
import {fetchWeatherData, consolidateWeatherData } from './weather-data';
import {appController} from './app-controller'




(async () => {
    let manhattan = await consolidateWeatherData("manhattan");
    console.log(manhattan.weatherDataFahrenheit)
    console.log(manhattan.getPrecipProb());
    
    
    
})();



appController();