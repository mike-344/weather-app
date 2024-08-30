import { getDayString } from "./weather-data";
function screenController(){
    const locationInput = document.querySelector("#location-input");
    const address = document.querySelector(".address");
    const searchButton = document.querySelector(".search");
    const currentTemp = document.querySelector(".current-temp");
    const minTemp = document.querySelector(".min-temp");
    const maxTemp = document.querySelector(".max-temp");
    const condition = document.querySelector(".condition");
    const humidity = document.querySelector(".humidity");
    const precipProb = document.querySelector(".precip-prob");
    const windSpeed = document.querySelector(".wind-speed");
    const uvIndex = document.querySelector(".uv-index");
    const toggles = document.querySelectorAll(".toggle");
    const forecast = document.querySelectorAll(".forecast-item");
    const highLowForecast = document.querySelectorAll(".high-low-forecast");
    const getSearchButton = () => {
        return searchButton;
    }
    const getLocationInput = () =>{
        return locationInput;
    }
    const getToggles = () => {
        return toggles;
    }
    const updateScreen = (weatherData, unit) =>{
        const fiveDay = weatherData.getFiveDayForecast(unit);
        address.textContent = weatherData.getAddress();
        currentTemp.textContent = `${weatherData.getTemp(unit).toFixed(1)}`;
        maxTemp.textContent = `H: ${weatherData.getCurrentMax(unit)}º`;
        minTemp.textContent = `L: ${weatherData.getCurrentMin(unit)}º`;
        condition.textContent = `${weatherData.getConditions()}`;
        humidity.textContent = `${weatherData.getHumidity()}%`;
        precipProb.textContent = `${weatherData.getPrecipProb()}%`;
        windSpeed.textContent = `${weatherData.getWindSpeed()} mph`;
        uvIndex.textContent = `${weatherData.getUvIndex()}`;

        forecast.forEach((day, index) => {
            day.textContent = fiveDay[index].dayOfWeek;
        })
        highLowForecast.forEach((day, index) => {
            day.textContent = `${fiveDay[index].maxTemp.toFixed(1)}º/${fiveDay[index].lowTemp.toFixed(1)}º`
        })

    }
  
   
    return{getSearchButton, getLocationInput, getToggles, updateScreen}
    
    
}

export{screenController}