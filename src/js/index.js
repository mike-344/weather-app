import '../css/style.css'
import {fetchWeatherData, consolidateLocationData } from './weather-data';
import {screenController} from './display-controller';



(async () => {
    let tappan = await consolidateLocationData("blauvelt");
    console.log(tappan.data);
    
})();



//screenController();