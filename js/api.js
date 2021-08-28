const button = document.getElementById("search-btn");
const countryName = document.getElementById("country-name");


button.addEventListener('click', () => {
    const inputField = document.getElementById("input-field");
    const countryNameValue = inputField.value;
    inputField.value = "";
    const productKey = "d05917453941bd3ccb388c27f0755205";
     if (countryNameValue == 0) {
        alert("Please Enter tour city name");
      } else {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${countryNameValue}&appid=${productKey}`;
         fetch(url)
             .then((res) => res.json())
             .then((data) => getValue(data))
             .catch(() => alert("Your given city is invalid!"));
      }
})

const getValue = datas => {
  // temperature
  const getTemp = datas.main.temp;
  const weatherid = datas.weather[0].id;
  // console.log(datas);

  const temp = document.getElementById("temp");
  temp.innerText = Math.round(getTemp - 273);
  // country
  countryName.innerText = datas.sys.country;
  // weather details
  const weather = document.getElementById("weather");
  weather.innerText = datas.weather[0].description;
  const img = document.getElementById("img");
  // image
  if (weatherid >= 200 && weatherid <= 321) {
    img.src = "img/Thunderstorm.png";
  } else if (weatherid >= 500 || weatherid <= 531) {
    img.src = "img/rain.png";
  } else if (weatherid >= 600 || weatherid <= 622) {
    img.src = "img/snow.png";
  } else if (weatherid >= 701 || weatherid <= 781) {
    img.src = "img/clouds.png";
  } else if (weatherid >= 782 || weatherid <= 800) {
    img.src = "img/clear.png";
  } else if (weatherid >= 801 || weatherid < 804) {
    img.src = "img/clouds.png";
  }
}