import { getDayString } from "./weather-data";
import clear_day from '../img/clear-day.png'
import clear_night from '../img/clear-night.png'
import cloudy from '../img/cloudy.png'
import fog from '../img/fog.png'
import hail from '../img/hail.png'
import partly_cloudy_day from '../img/partly-cloudy-day.png'
import partly_cloudy_night from '../img/partly-cloudy-night.png'
import rain_snow_showers_day from '../img/rain-snow-showers-day.png'
import rain_snow_showers_night from '../img/rain-snow-showers-night.png'
import rain_snow from '../img/rain-snow.png'
import rain from '../img/rain.png'
import showers_day from '../img/showers-day.png'
import showers_night from '../img/showers-night.png'
import sleet from '../img/sleet.png'
import snow_showers_day from '../img/snow-showers-day.png'
import snow_showers_night from '../img/snow-showers-night.png'
import snow from '../img/snow.png'
import thunder_rain from '../img/thunder-rain.png'
import thunder_showers_day from '../img/thunder-showers-day.png'
import thunder_showers_night from '../img/thunder-showers-night.png'
import thunder from '../img/thunder.png'
import wind from '../img/wind.png'

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
            return clear_day;
        } else if(icon === "clear-night"){
            return clear_night;
        } else if(icon === "cloudy"){
            return cloudy;
        } else if(icon === "fog"){
        return fog;
        } else if(icon === "hail"){
            return hail;
        } else if(icon === "partly-cloudy-day"){
            return partly_cloudy_day;
         } else if(icon === "partly-cloudy-night"){
                 return partly_cloudy_night;
         } else if(icon === "rain-snow-showers-day"){
                 return rain_snow_showers_day;
         } else if(icon === "rain-snow-showers-night"){
                 return rain_snow_showers_night;
         } else if(icon === "rain-snow"){
                return rain_snow;
         } else if(icon === "rain"){
                return rain;
         } else if(icon === "showers-day"){
                return showers_day;
        }else if(icon === "showers-night"){
            return showers_night;
        }else if(icon === "sleet"){
            return sleet;
        }else if(icon === "snow-showers-day"){
            return snow_showers_day;
        }else if(icon === "snow-showers-night"){
            return snow_showers_night;
        }else if(icon === "snow"){
            return snow;
        }else if(icon === "thunder-rain"){
            return thunder_rain;
        }else if(icon === "thunder-showers-day"){
            return thunder_showers_day;
        }else if(icon === "thunder-showers-night"){
            return thunder_showers_night;
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
        icons.forEach((icon, index) =>{
            let logoSrc = getUrl(fiveDay[index].iconLogo);
            icon.setAttribute("src", logoSrc);
        })
        

    }
  
   
    return{getSearchButton, getLocationInput, getToggles, updateScreen}
    
    
}

export{screenController}