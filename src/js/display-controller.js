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
    const icons = document.querySelectorAll("img");
    const getUrl = (icon) => {
        if (icon === "clear-day"){
            return clearDay;
        } else if(icon === "clear-night"){
            return clearNight;
        } else if(icon === "cloudy"){
            return cloudy;
        } else if(icon === "fog"){
        return fog;
        } else if(icon === "hail"){
            return hail;
        } else if(icon === "partly-cloudy-day"){
            return partlyCloudyDay;
         } else if(icon === "partly-cloudy-night"){
                 return partlyCloudyNight;
         } else if(icon === "rain-snow-showers-day"){
                 return rainSnowShowersDay;
         } else if(icon === "rain-snow-showers-night"){
                 return rainSnowShowersNight;
         } else if(icon === "rain-snow"){
                return rainSnow;
         } else if(icon === "rain"){
                return rain;
         } else if(icon === "showers-day"){
                return showersDay;
        }else if(icon === "showers-night"){
            return showersNight;
        }else if(icon === "sleet"){
            return sleet;
        }else if(icon === "snow-showers-day"){
            return snowShowersDay;
        }else if(icon === "snow-showers-night"){
            return snowShowersNight;
        }else if(icon === "snow"){
            return snow;
        }else if(icon === "thunder-rain"){
            return thunderRain;
        }else if(icon === "thunder-showers-day"){
            return thunderShowersDay;
        }else if(icon === "thunder-showers-night"){
            return thunderShowersNight;
        }else if(icon === "thunder"){
            return thunder;
        }else if(icon === "wind"){
            return wind;
        }
    }
   
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