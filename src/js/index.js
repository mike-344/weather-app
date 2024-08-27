import '../css/style.css'
import {fetchWeatherData, consolidateWeatherData } from './weather-data';
import {screenController} from './display-controller';



(async () => {
    let tappan = await consolidateWeatherData("manhattan");
    console.log(tappan.getTemp());
    console.log(tappan.weatherData)
    
})();



screenController();