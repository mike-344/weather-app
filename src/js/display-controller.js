import { fetchWeatherData, consolidateWeatherData } from "./weather-data";

function screenController(){
    const locationInput = document.querySelector("#location-input");
    const address = document.querySelector(".address");
    const searchButton = document.querySelector(".search");
    const currentTemp = document.querySelector(".current-temp");
    const minTemp = document.querySelector(".min-temp");
    const maxTemp = document.querySelector(".max-temp");

    async function initializePage(){
        const defaultLocation = "New York";
        let locationData = await consolidateWeatherData(defaultLocation);
        updateScreen(locationData);
    }
    const updateScreen = (weatherData) =>{
        let fiveDay = weatherData.getFiveDayForecast();
        address.textContent = weatherData.getAddress();
        currentTemp.textContent = `${weatherData.getTemp()}`;
        maxTemp.textContent = `H: ${fiveDay[0].maxTemp}º`;
        minTemp.textContent = `L: ${fiveDay[0].lowTemp}º`;
    }
   

    searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let location = locationInput.value || "New York";
        let locationData = await consolidateWeatherData(location);
        updateScreen(locationData);

    })
  

    initializePage();
    

    
}


export{screenController}