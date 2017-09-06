import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=32827eeb929e2d0d1dc1e79a25940492';

// Will be used to fetch weather information
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
        temperature: r.main.temp - 273.15,
        generalWeather: r.weather[0].main,
        weatherDescription: r.weather[0].description,
        iconCode: getIcon(r.weather[0].id)
      };
    }
  });
}

function getIcon(wID) {
  let code;

  if (wID <= 531) {
    code = 'RAIN'
  } else if (wID === 611 || wID === 612){
    code = 'SLEET'
  } else if (wID <= 622) {
    code = 'SNOW'
  } else if (wID <= 781) {
    code = 'FOG'
  } else if (wID === 800){
    code = 'CLEAR_DAY'
  } else if (wID <= 802) {
    code = 'PARTLY_CLOUDY_DAY'
  } else if (wID <= 804) {
    code = 'CLOUDY'
  } else if (wID >= 951 && wID <= 962 || wID === 905){
    code = 'WIND'
  }

  return code
}


