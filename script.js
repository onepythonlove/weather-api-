//부산광역시
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.1017&longitude=129.03&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("k").innerHTML=
data['current_weather'].temperature

});
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.1017&longitude=129.03&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("ad").innerHTML=
data['current_weather'].windspeed

});
fetch('https://api.open-meteo.com/v1/forecast?latitude=35.1017&longitude=129.03&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("wind").innerHTML=
data['hourly_units'].rain
});
//서울특별시
fetch('https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("kd").innerHTML=
data['current_weather'].temperature
});
fetch('https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m,rain&current_weather=true')
.then ((response) => response.json ())
.then ((data) => { document.getElementById("add").innerHTML=
data['current_weather'].windspeed
});
