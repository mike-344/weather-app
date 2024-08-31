async function fetchWeatherDataFahrenheit(location) {
    try{
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&iconSet=icons2&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`
  );
  if (!response.ok){
    throw new Error(`Invalid Address! Status ${response.status}`)
  }
  let data = await response.json();
    
  return data;
} catch(err){
    console.error("Error fetching weather data", err)
    alert(err)
    return {}
}
}
  

async function fetchWeatherDataCelsius(location) {
   try{ 
  let response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&iconSet=icons2&key=SB4XPNB9C6RX2EVSB6W5GTMBT&contentType=json`
  );
  if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  let data = await response.json();
  return data;
} catch(err){
    console.error ("Error fetching weather data", err)
    
    return {}
}
   
}
const getDayString = (index) => {
  switch (index) {
    case "0":
      return "Mon";
    case "1":
      return "Tue";
    case "2":
      return "Wed";
    case "3":
      return "Thu";
    case "4":
      return "Fri";
    case "5":
      return "Sat";
    case "6":
      return "Sun";
  }
};

async function consolidateWeatherData(location) {
    try{
  let [weatherDataFahrenheit, weatherDataCelsius] = await Promise.all([
    fetchWeatherDataFahrenheit(location),
    fetchWeatherDataCelsius(location),
  ]);

  const getTemp = (unit) => {
    return unit === "us"
      ? weatherDataFahrenheit.currentConditions.temp
      : weatherDataCelsius.currentConditions.temp;
  };

  const getAddress = () => {
    return weatherDataFahrenheit.resolvedAddress;
  };
  const getConditions = () => {
    return weatherDataFahrenheit.currentConditions.conditions;
  };
  const getDescription = () => {
    return weatherDataFahrenheit.description;
  };

  const getHumidity = () => {
    return weatherDataFahrenheit.currentConditions.humidity;
  };
  const getWindSpeed = () => {
    return weatherDataFahrenheit.currentConditions.windspeed;
  };
  const getUvIndex = () => {
    return weatherDataFahrenheit.currentConditions.uvindex;
  };
  const getPrecipProb = () => {
    return weatherDataFahrenheit.currentConditions.precipprob;
  };

  const getCurrentMax = (unit) => {
    return unit === "us"
      ? weatherDataFahrenheit.days[0].tempmax
      : weatherDataCelsius.days[0].tempmax;
  };

  const getCurrentMin = (unit) => {
    return unit === "us"
      ? weatherDataFahrenheit.days[0].tempmin
      : weatherDataCelsius.days[0].tempmin;
  };
  const getCurrentIcon = () => {
    return weatherDataFahrenheit.currentConditions.icon;
  };

  const getFiveDayForecast = (unit) => {
    let forecast =
      unit === "us" ? weatherDataFahrenheit.days : weatherDataCelsius.days;
    return forecast.slice(1, 6).map((day) => {
      const dayOfWeekIndex = new Date(day.datetime).getDay();
      return {
        maxTemp: day.tempmax,
        lowTemp: day.tempmin,
        dayOfWeekIndex: dayOfWeekIndex,
        dayOfWeek: getDayString(dayOfWeekIndex.toString()),
        iconLogo: day.icon,
      };
    });
  };

  return {
    weatherDataFahrenheit,
    weatherDataCelsius,
    getTemp,
    getAddress,
    getConditions,
    getFiveDayForecast,
    getDescription,
    getHumidity,
    getWindSpeed,
    getUvIndex,
    getPrecipProb,
    getCurrentMax,
    getCurrentMin,
    getCurrentIcon,
  };
} catch(err){
    console.log(err)
    
    return{}
}
}

export {
  fetchWeatherDataFahrenheit,
  fetchWeatherDataCelsius,
  consolidateWeatherData,
  getDayString,
};
