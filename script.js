const getWeatherBtn = document.getElementById("get-weather-btn");
const citySelect = document.getElementById("city");

const weatherIcon = document.getElementById("weather-icon");
const mainTemperature = document.getElementById("main-temperature");
const feelsLike = document.getElementById("feels-like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const windGust = document.getElementById("wind-gust");
const weatherMain = document.getElementById("weather-main");
const locationEl = document.getElementById("location");

function safe(value) {
  return value === undefined ? "N/A" : value;
}

async function getWeather(city) {
  try {
    const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
    const response = await fetch(url);

    if (!response.ok) throw new Error("API error");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;     
  }
}

async function showWeather(city) {
  const data = await getWeather(city);

  if (!data) {
    alert("Something went wrong, please try again later.");
    return;
  }

  weatherIcon.src = safe(data.weather?.[0]?.icon);
  weatherMain.textContent = safe(data.weather?.[0]?.main);

  mainTemperature.textContent = safe(data.main?.temp);
  feelsLike.textContent = safe(data.main?.feels_like);
  humidity.textContent = safe(data.main?.humidity);
  wind.textContent = safe(data.wind?.speed);
  windGust.textContent = safe(data.wind?.gust);

  locationEl.textContent = safe(data.name);
}

getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;

  if (!city) return;
  showWeather(city);
});
