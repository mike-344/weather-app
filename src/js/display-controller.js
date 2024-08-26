import { fetchWeatherData, consolidateLocationData } from "./weather-data";

function screenController(){
    const locationInput = document.querySelector("#location-input");
    const address = document.querySelector(".address");
    const searchButton = document.querySelector(".search");

    searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let location = locationInput.value;
        let locationData = await consolidateLocationData(location);
        address.textContent = locationData.address;

    })

    
}


export{screenController}