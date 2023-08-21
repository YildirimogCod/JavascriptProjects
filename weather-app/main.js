const apiKey = "21a1694f968372a2942919631c4d0322";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const getInput = document.querySelector('.input');
const getButton = document.querySelector('.button');
document.querySelector('.error');
getButton.addEventListener('click',()=>{
    checkWeather(getInput.value);
})

const getIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status==404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {


        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humudity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clear"){
            getIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Clouds"){
            getIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            getIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Rain"){
            getIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Mist"){
            getIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Snow"){
            getIcon.src = "images/snow.png"
        }
    
    
        document.querySelector('.weather').style.display = "block";
      
    }

}


