import { fetchWeatherData, consolidateWeatherData } from "./weather-data";

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
    const fahrLogo = document.querySelector(".us");
    const celsLogo = document.querySelector(".uk");
    const getSearchButton = () => {
        return searchButton;
    }
    const getLocationInput = () =>{
        return locationInput;
    }
    const getFahrLogo = () => {
        return fahrLogo;
    }
    const getCelsLogo = () => {
        return celsLogo;
    }

    /*async function initializePage(){
        const defaultLocation = "New York";
        let locationData = await consolidateWeatherData(defaultLocation);
        updateScreen(locationData, "us");
    }*/
    const updateScreen = (weatherData, unit) =>{
        let sixDay = weatherData.getSixDayForecast(unit);
        address.textContent = weatherData.getAddress();
        currentTemp.textContent = `${weatherData.getTemp(unit)}`;
        maxTemp.textContent = `H: ${sixDay[0].maxTemp}º`;
        minTemp.textContent = `L: ${sixDay[0].lowTemp}º`;
        condition.textContent = `${weatherData.getConditions()}`
    }
   

   /* searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let location = locationInput.value || "New York";
        let locationData = await consolidateWeatherData(location);
        updateScreen(locationData);

    })*/
  

   // initializePage();

    return{getSearchButton, getLocationInput, getFahrLogo, getCelsLogo, updateScreen}
    

    
}


export{screenController}