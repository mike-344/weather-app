import { fetchWeatherData, consolidateLocationData } from "./weather-data";

function screenController(){
    const locationInput = document.querySelector("#location-input");
    const address = document.querySelector(".address");
    const searchButton = document.querySelector(".search");
    const currentTemp = document.querySelector(".current-temp");
    const minTemp = document.querySelector(".min-temp");
    const maxTemp = document.querySelector(".max-temp");

    searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let location = locationInput.value;
        let locationData = await consolidateLocationData(location);
        address.textContent = locationData.address;
        currentTemp.textContent = locationData.temp;
        minTemp.textContent = locationData.sevenDayForecast[0].lowTemp;
        maxTemp.textContent = locationData.sevenDayForecast[0].maxTemp;

    })

    
}


export{screenController}