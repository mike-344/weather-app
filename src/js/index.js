import '../css/style.css'
import {fetchWeatherData, consolidateLocationData } from './weather-data';
import {screenController} from './display-controller';



(async () => {
    let tappan = await consolidateLocationData("manhattan");
    console.log(tappan.temp);
    console.log(tappan.data)
    
})();



screenController();