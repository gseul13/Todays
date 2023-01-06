const API_KEY = '608fa91b1d96cc4c6b7fb2d140f51829';

let name = document.querySelector('#name');
let icon = document.querySelector('#icon');
let temp = document.querySelector('#temp');
let feels_like = document.querySelector('#feels_like');
let description = document.querySelector('#description');
let temp_min = document.querySelector('#temp_min');
let temp_max = document.querySelector('#temp_max');
// let iconimg = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

function connect(position) {
  // alert('위치연결 성공');\
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const lang = 'kr';
  console.log(`위도:${lat} 경도:${lon}`)
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`;
  console.log(URL);
  fetch(URL).then((response) => response.json())
  .then((data) => {
              console.log(data.name); // 지역이름
              console.log(data.weather[0].description); // 설명
              console.log(data.weather[0].icon); // 아이콘
              console.log(data.main.temp); // 온도
              console.log(data.main.feels_like); // 체감온도
              console.log(data.main.temp_min); // 최저온도
              console.log(data.main.temp_max); // 최고온도


              name.innerHTML = data.name;
              temp.innerHTML = data.main.temp + '℃';
              feels_like.innerHTML = data.main.feels_like + '℃';
              description.innerHTML = data.weather[0].description;
              temp_min.innerHTML = data.main.temp_min + '℃';
              temp_max.innerHTML = data.main.temp_max + '℃';
              
              const iconId = data.weather[0].icon;
              const imgUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`
              icon.setAttribute('src', imgUrl);
              
            });
}

function errorConn() {
  alert('위치연결 실패');
}

navigator.geolocation.getCurrentPosition(connect, errorConn);


