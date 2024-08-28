async function fetchWeatherDataFahrenheit(location){
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`)
    let data = await response.json();
    return data;
    
    }

    async function fetchWeatherDataCelsius(location){
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`)
        let data = await response.json();
        return data;
        
        }
        
    async function consolidateWeatherData(location){
    let [weatherDataFahrenheit, weatherDataCelsius] = await Promise.all([fetchWeatherDataFahrenheit(location), fetchWeatherDataCelsius(location)]);
    
    const getTemp = (unit) => {
        return unit === 'us' ? weatherDataFahrenheit.currentConditions.temp : weatherDataCelsius.currentConditions.temp;
    }
   
    const getAddress = ()=> {
        return weatherDataFahrenheit.resolvedAddress;
    }
    const getConditions = () => {
        return weatherDataFahrenheit.currentConditions.conditions;
    }
    const getDescription = () => {
        return weatherDataFahrenheit.description;
    }

    const getHumidity = () => {
        return weatherDataFahrenheit.currentConditions.humidity;
    }
    const getWindSpeed = () => {
        return weatherDataFahrenheit.currentConditions.windspeed;
    }
    const getUvIndex = () => {
        return weatherDataFahrenheit.currentConditions.uvindex;
    }
    const getPrecipProp = () => {
        return weatherDataFahrenheit.currentConditions.precipprob;
    }
    
    const getSixDayForecast = (unit) => {
        let forecast = unit === 'us' ? weatherDataFahrenheit.days : weatherDataCelsius.days;
        return forecast.slice(0, 6).map(day => ({
            maxTemp: day.tempmax,
            lowTemp: day.tempmin
        }));
      
    }
        
    return{ weatherDataFahrenheit, weatherDataCelsius, getTemp, getAddress, getConditions, getSixDayForecast, getDescription, getHumidity, getWindSpeed, getUvIndex, getPrecipProp}
    }

    export{fetchWeatherDataFahrenheit, fetchWeatherDataCelsius, consolidateWeatherData}
    
    