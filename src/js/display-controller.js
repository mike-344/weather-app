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
        let sixDay = weatherData.getSixDayForecast(unit);
        address.textContent = weatherData.getAddress();
        currentTemp.textContent = `${weatherData.getTemp(unit)}`;
        maxTemp.textContent = `H: ${sixDay[0].maxTemp}º`;
        minTemp.textContent = `L: ${sixDay[0].lowTemp}º`;
        condition.textContent = `${weatherData.getConditions()}`
    }
   
    return{getSearchButton, getLocationInput, getToggles, updateScreen}
    
    
}

export{screenController}