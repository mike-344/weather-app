async function fetchWeatherData(location){
    let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`)
    let data = await response.json();
    return data;
    
    }
    
    
    async function consolidateLocationData(location){
    let data = await fetchWeatherData(location);
    let temp = data.currentConditions.temp;
    let address = data.resolvedAddress;
    let conditions = data.currentConditions.conditions;
    let sevenDayForecast = data.days.slice(0, 8).map(day => ({
        maxTemp: day.tempmax,
        lowTemp: day.tempmin
    }));
    let description = data.description;
    
    return{data, temp, address, conditions, sevenDayForecast, description}
    }

    export{fetchWeatherData, consolidateLocationData}
    
    