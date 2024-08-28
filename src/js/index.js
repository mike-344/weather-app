import '../css/style.css'
import {fetchWeatherData, consolidateWeatherData } from './weather-data';
import {screenController} from './display-controller';
import {appController} from './app-controller'



(async () => {
    let tappan = await consolidateWeatherData("manhattan");
    console.log(tappan.weatherDataCelsius);
    console.log(tappan.getTemp("uk"))
    
})();



appController();