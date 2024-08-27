async function fetchWeatherData(location){
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`)
    let data = await response.json();
    return data;
    
    }
    
    
    async function consolidateWeatherData(location){
    let weatherData = await fetchWeatherData(location);
    const getTemp = () => {
        return weatherData.currentConditions.temp;
    }
    const getAddress = ()=> {
        return weatherData.resolvedAddress;
    }
    const getConditions = () => {
        return weatherData.currentConditions.conditions;
    }
    const getDescription = () => {
        return weatherData.description;
    }

    const getHumidity = () => {
        return weatherData.currentConditions.humidity;
    }
    const getWindSpeed = () => {
        return weatherData.currentConditions.windspeed;
    }
    const getUvIndex = () => {
        return weatherData.currentConditions.uvindex;
    }
    const getPrecipProp = () => {
        return weatherData.currentConditions.precipprob;
    }
    

    let fiveDayForecast = weatherData.days.slice(0, 6).map(day => ({
        maxTemp: day.tempmax,
        lowTemp: day.tempmin
    }));

    const getFiveDayForecast = () => {
        return fiveDayForecast;
    }
    
    
    return{ weatherData,getTemp, getAddress, getConditions, getFiveDayForecast, getDescription, getHumidity, getWindSpeed, getUvIndex, getPrecipProp}
    }

    export{fetchWeatherData, consolidateWeatherData}
    
    