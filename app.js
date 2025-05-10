const api = "779d53bdf14165004471664c2d72a1e1";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchInputEL = document.querySelector(".search input");
const searchBtnEL = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${api}`);
  var data = await response.json();

  if (response.status == 404 || city == "") {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    const WeatherImg = document.querySelector(".weatherIcon");
    if (data.weather[0].main == "Clear") {
      WeatherImg.src = "images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      WeatherImg.src = "images/clouds.png";
    } else if (data.weather[0].main == "Drizzle") {
      WeatherImg.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      WeatherImg.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      WeatherImg.src = "images/rain.png";
    }

    document.querySelector(".weather h1").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".weather h2").innerHTML = data.name;
    document.querySelector("._humidity ").innerHTML = data.main.humidity + "%";
    document.querySelector("._wind ").innerHTML = data.wind.speed + " Km/h";
  }
}
searchBtnEL.addEventListener("click", () => {
  let city = searchInputEL.value;
  checkWeather(city.trim());
});
