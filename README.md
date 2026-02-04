# 📌 **README.md — Weather App**

## 🌦️ Weather App

A simple and clean weather application that fetches real-time weather data for selected major cities.
Built using **HTML**, **CSS**, and **JavaScript**, this app displays temperature, humidity, wind speed, wind gust, weather conditions, and icon visuals using the freeCodeCamp Weather Proxy API.

---

## 🚀 Live Demo

https://riiach.github.io/Weather-App/

---

## 🖼️ Preview

![Weather App Preview](weather_app_preview.png)

---

## ✨ Features

✔ Select a city from a dropdown list
✔ Fetch live weather data using a public API
✔ Display temperature, humidity, wind speed, gusts & more
✔ Show weather icon (sunny, cloudy, rain, etc.)
✔ Clean and simple UI
✔ Error handling for failed API requests

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6)**
* **freeCodeCamp Weather Proxy API**

---

## 📁 Project Structure

```
Weather-App/
│── index.html
│── style.css
│── script.js
│── README.md
```

---

## 📌 How It Works

### 1. User selects a city

The `<select>` menu contains preset cities:

```html
<select id="city">
  <option value="">Select City</option>
  <option value="new york">New York</option>
  <option value="los angeles">Los Angeles</option>
  ...
</select>
```

### 2. User clicks **Get Weather**

This triggers the main event:

```js
getWeatherBtn.addEventListener("click", () => {
  const city = citySelect.value;
  if (!city) return;
  showWeather(city);
});
```

### 3. The app fetches weather data

It calls the freeCodeCamp weather API:

```js
async function getWeather(city) {
  const url = `https://weather-proxy.freecodecamp.rocks/api/city/${city}`;
  const response = await fetch(url);
  return response.json();
}
```

### 4. The UI updates with results

Weather details such as temperature, humidity, and wind data are displayed dynamically.

---

## 📡 API Reference

Using this endpoint:

```
https://weather-proxy.freecodecamp.rocks/api/city/{city}
```

Example:

```
https://weather-proxy.freecodecamp.rocks/api/city/london
```

---

## 🧱 Installation & Setup

### 🔧 Clone the repository:

```bash
git clone https://github.com/riiach/Weather-App.git
```

### ▶️ Run the project:

Simply open `index.html` in your browser.

---

## ⚠️ Error Handling

If the API fails, the app will notify the user:

```js
alert("Something went wrong, please try again later.");
```

---

## 🚧 Future Improvements

* Add a search bar
* Enable geolocation (auto-detect user's city)
* Add forecast (hourly / weekly)
* Improve UI styling
* Add loading spinner

---

## 👩‍💻 Author

**Ria Choi**
Feel free to connect or give feedback!
