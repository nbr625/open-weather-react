import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=32827eeb929e2d0d1dc1e79a25940492';



export function getWeatherObject(location){
  let encodedLocation = encodeURIComponent(location);
  let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

  return axios.get(requestUrl)
  .then( (res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      let r = res.data;
      return {
        humidity: r.main.humidity,
        temperature: r.main.temp,
        generalWeather: r.weather[0].main,
        weatherDescription: r.weather[0].description,
        weatherIcon: r.weather[0].icon
      };
    }
  });
}


