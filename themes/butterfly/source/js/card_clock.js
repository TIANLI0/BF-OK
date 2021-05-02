var mykey = {
  weather: '6ba676e291b8cf33e3de82874b8cfe5d' // 替换成从openweather获取的API 密钥
};
var locationurl = 'https://extreme-ip-lookup.com/json/';
var cityname = '';
var weatherurl = '';
var userip = '';
var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

fetch(locationurl)
  .then(data => data.json())
  .then(data => {
    //console.log(data);
    cityname = data.city;
    if (typeof data.city == "undefined") {
      cityname = data.region;
    };
    if (typeof data.region == "undefined") {
      cityname = data.country;
    };
    userip = data.query;
    weatherurl = 'https://api.openweathermap.org/data/2.5/weather/?q=' + cityname + '&units=metric&appid=' + mykey.weather;
    getweatherdata();
  })
  .catch(function(error) {
    console.log(error);
  });

function getweatherdata() {
  fetch(weatherurl)
    .then(data => data.json())
    .then(data => {
      //console.log(data);
      clock.weatherimg = '/assets/weather/' + data.weather[0].icon + '.png';
      clock.temperature = data.main.temp + "*C";
      clock.humidity = data.main.humidity + "%";
      clock.ip = userip;
      clock.humidityimg = '/assets/weather/hu.png';
      clock.city = data.name;
      var timerID = setInterval(updateTime, 1000);
      updateTime();
      clock.clockshow = true;

      function updateTime() {
        var cd = new Date();
        clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
        clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth() + 1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
        var hamorpm = cd.getHours();
        var str;
        if (hamorpm > 12) {
          hamorpm -= 12;
          str = " PM";
        } else {
          str = " AM";
        }
        clock.daylight = str
      };

      function zeroPadding(num, digit) {
        var zero = '';
        for (var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      };
      updateTime();
    })
    .catch(function(error) {
      console.log(error);
    });
};
var clock = new Vue({
  el: '#clock',
  data: {
    ip: '',
    time: '',
    weatherimg: '',
    temperature: '',
    humidityimg: '',
    humidity: '',
    usaqi: '',
    city: '',
    date: '',
    daylight: '',
    clockshow: 'false'
  },
});
