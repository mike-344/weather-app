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
        let fiveDay = weatherData.getFiveDayForecast(unit);
        address.textContent = weatherData.getAddress();
        currentTemp.textContent = `${weatherData.getTemp(unit)}`;
        maxTemp.textContent = `H: ${weatherData.getCurrentMax(unit)}º`;
        minTemp.textContent = `L: ${weatherData.getCurrentMin(unit)}º`;
        condition.textContent = `${weatherData.getConditions()}`;
        humidity.textContent = `${weatherData.getHumidity()}%`;
        precipProb.textContent = `${weatherData.getPrecipProb()}%`
        windSpeed.textContent = `${weatherData.getWindSpeed()} mph`
        uvIndex.textContent = `${weatherData.getUvIndex()}`
    }
   
    return{getSearchButton, getLocationInput, getToggles, updateScreen}
    
    
}

export{screenController}