import { API_KEY } from "./config.js";

document.querySelector('#search-button').addEventListener('click', () => {
    // console.log('Click no botão');
    const city = document.querySelector('#city').value;
    const errorInput = document.querySelector('#error-input');
    console.log(city);

    if (!city) {
        errorInput.classList.toggle();
    } else {
        errorInput.style.display = 'none';
    
        citySearch(city);
    }
});

async function citySearch(nameCity) {
    const apiKey = API_KEY;
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric&lang=pt`;

    const response = await fetch(urlApi);
    console.log("response => ", response);

    extractCityData(await response.json());
}

function extractCityData(data) {
    // console.log("extract => ", data);
    let errorSearch = document.querySelector("#error-search");
    errorSearch.classList.add("hidden");
    if (data.cod == 404) {
        errorSearch.classList.toggle("hidden");
    } else {
        let cityData = {
            id: data.id,
            name: data.name,
            country: data.sys.country,
            weather: {
                id: data.weather[0].id,
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            },
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed
        }

        let weather = document.querySelector("#weather");
        weather.classList.add("hidden");
        weather.classList.toggle("hidden");

        console.log("cityData => ", cityData);
        insertDataIntoTheDOM(cityData);
    }

}

function insertDataIntoTheDOM(city) {
    const cityName = document.querySelector("#city-name");
    const imgWeather = document.querySelector("#img-weather");
    const tempValue = document.querySelector("#temp-value");
    const tempDescription = document.querySelector("#temp-description");
    const tempMax = document.querySelector("#temp-max");
    const tempMin = document.querySelector("#temp-min");
    const humidity = document.querySelector("#humidity");
    const wind = document.querySelector("#wind");

    // Weather
    cityName.innerHTML = `${city.name}, ${city.country}`;
    imgWeather.setAttribute('src', `http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`);
    tempValue.innerHTML = `${city.temp}<sup>ºc</sup>`;
    tempDescription.innerHTML = (city.weather.description);

    // Infos
    tempMax.innerHTML = `${city.temp_max}<sup>ºc</sup>`;
    tempMin.innerHTML = `${city.temp_min}<sup>ºc</sup>`;
    humidity.innerHTML = `${city.humidity}%`;
    wind.innerHTML = `${city.wind_speed}km/h`;
}
