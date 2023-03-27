//cc0a4e098637b8821ad6c91241fa51fc

const API_key = 'cc0a4e098637b8821ad6c91241fa51fc'


window.onload = function(){

    var startPos;
    var geosuccess = function(position) {

        startPos = position;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${startPos.coords.latitude}&lon=${startPos.coords.longitude}&units=metric&appid=${API_key}`)
.then((data) => data.json())

.then((jsonData) => {


fetch(`https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
.then((res) => res.blob())
.then((result) => {

document.getElementById("text_location").innerHTML = jsonData.name
document.getElementById("text_location_country").innerHTML = jsonData.sys.country
document.getElementById("text_temp").innerHTML = Math.round(jsonData.main.temp)
document.getElementById("text_feelslike").innerHTML = Math.round(jsonData.main.feels_like)
document.getElementById("text_desc").innerHTML = jsonData.weather[0].description

const imageObjectURL = URL.createObjectURL(result);
document.getElementById("icon").src = imageObjectURL

 })

})

};
  navigator.geolocation.getCurrentPosition(geosuccess);
}