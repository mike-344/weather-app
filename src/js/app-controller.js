import { consolidateWeatherData, fetchWeatherData } from "./weather-data";
import { screenController } from "./display-controller";

async function appController (){
    screenController();
    let searchButton = screenController().getSearchButton();
    let locationInput = screenController().getLocationInput();
    let toggles = screenController().getToggles();
    let defaultLocation = "New York";
    let activeUnit = "us";
    let activeLocation = await consolidateWeatherData(defaultLocation);
    const switchActiveUnit = () => {
    activeUnit = activeUnit === 'us' ? 'uk' : 'us';
}
    screenController().updateScreen(activeLocation, activeUnit);

    searchButton.addEventListener("click", async (e) => {
        e.preventDefault();
        let location = locationInput.value || "New York";
        let locationData = await consolidateWeatherData(location);
        screenController().updateScreen(locationData, activeUnit);

    })

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            

        })
    });





}
export {appController}