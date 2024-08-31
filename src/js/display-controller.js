import clear_day from "../img/clear-day.png";
import clear_night from "../img/clear-night.png";
import cloudy from "../img/cloudy.png";
import fog from "../img/fog.png";
import hail from "../img/hail.png";
import partly_cloudy_day from "../img/partly-cloudy-day.png";
import partly_cloudy_night from "../img/partly-cloudy-night.png";
import rain_snow_showers_day from "../img/rain-snow-showers-day.png";
import rain_snow_showers_night from "../img/rain-snow-showers-night.png";
import rain_snow from "../img/rain-snow.png";
import rain from "../img/rain.png";
import showers_day from "../img/showers-day.png";
import showers_night from "../img/showers-night.png";
import sleet from "../img/sleet.png";
import snow_showers_day from "../img/snow-showers-day.png";
import snow_showers_night from "../img/snow-showers-night.png";
import snow from "../img/snow.png";
import thunder_rain from "../img/thunder-rain.png";
import thunder_showers_day from "../img/thunder-showers-day.png";
import thunder_showers_night from "../img/thunder-showers-night.png";
import thunder from "../img/thunder.png";
import wind from "../img/wind.png";

function screenController() {
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
  const icons = document.querySelectorAll(".forecast img");
  const currentIcon = document.querySelector(".current-icon");


  const iconMap = {
    "clear-day": clear_day,
    "clear-night": clear_night,
    "cloudy": cloudy,
    "fog": fog,
    "hail": hail,
    "partly-cloudy-day": partly_cloudy_day,
    "partly-cloudy-night": partly_cloudy_night,
    "rain-snow-showers-day": rain_snow_showers_day,
    "rain-snow-showers-night": rain_snow_showers_night,
    "rain-snow": rain_snow,
    "rain": rain,
    "showers-day": showers_day,
    "showers-night": showers_night,
    "sleet": sleet,
    "snow-showers-day": snow_showers_day,
    "snow-showers-night": snow_showers_night,
    "snow": snow,
    "thunder-rain": thunder_rain,
    "thunder-showers-day": thunder_showers_day,
    "thunder-showers-night": thunder_showers_night,
    "thunder": thunder,
    "wind": wind,
  };
  
  const getUrl = (icon) => {
    return iconMap[icon];
  };

  const getSearchButton = () => {
    return searchButton;
  };
  const getLocationInput = () => {
    return locationInput;
  };
  const getToggles = () => {
    return toggles;
  };
  const updateScreen = (weatherData, unit) => {
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
    });
    highLowForecast.forEach((day, index) => {
      day.textContent = `${fiveDay[index].maxTemp.toFixed(1)}º/${fiveDay[
        index
      ].lowTemp.toFixed(1)}º`;
    });
    icons.forEach((icon, index) => {
      let logoSrc = getUrl(fiveDay[index].iconLogo);
      icon.setAttribute("src", logoSrc);
    });
    currentIcon.setAttribute("src", getUrl(weatherData.getCurrentIcon()));
  };

  return { getSearchButton, getLocationInput, getToggles, updateScreen };
}

export { screenController };
