import { consolidateWeatherData, fetchWeatherData } from "./weather-data";
import { screenController } from "./display-controller";

async function appController (){
    const locationData = (location) => {
        return consolidateWeatherData(location);
    }



}