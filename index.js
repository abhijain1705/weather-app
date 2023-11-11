const inputField = document.querySelector("input");
const searchBtn = document.querySelector("button");
const temperatureField = document.querySelector(".temperature-field");
const temperatureImageFeild = document.querySelector(
  ".temperature-image-field"
);
const cityNameVariable = document.querySelector(".city-name");
const windField = document.querySelector(".wind-field");
const humidityField = document.querySelector(".humidity-field");
const apiKey = "fc0b74793c12b7f443834cbd97904a8f";

async function showTemperature(cityName) {
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=${apiKey}&units=metric`;

  if (cityName.length > 0) {
    apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  }

  const response = await fetch(apiURL);
  const weatherData = await response.json();
  console.log(weatherData.name);
  temperatureField.innerHTML = weatherData.main.temp + "°C";
  let weatherConditon = weatherData.weather[0].main;
  if (weatherConditon === "Clear") {
    temperatureImageFeild.src = "./images/clear.png";
  } else if (weatherConditon === "Drizzle") {
    temperatureImageFeild.src = "./images/drizzle.png";
  } else if (weatherConditon === "Snow") {
    temperatureImageFeild.src = "./images/snow.png";
  } else if (weatherConditon === "Rain") {
    temperatureImageFeild.src = "./images/rain.png";
  } else if (weatherConditon === "Mist") {
    temperatureImageFeild.src = "./images/mist.png";
  } else if (weatherConditon === "Clouds") {
    temperatureImageFeild.src = "./images/clouds.png";
  } else {
    temperatureImageFeild.src = "./images/clear.png";
  }

  cityNameVariable.innerHTML = weatherData.name;

  windField.innerHTML = weatherData.wind.speed + " m/s";
  humidityField.innerHTML = weatherData.main.humidity + "%";
}
showTemperature("");
let inputByUser = "";
inputField.addEventListener("input", (event) => {
  inputByUser = event.target.value;
});

searchBtn.addEventListener("click", () => {
  showTemperature(inputByUser);
});
