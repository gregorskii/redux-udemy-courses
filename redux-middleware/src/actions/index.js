import axios from 'axios';

const OPEN_WEATHER_API_KEY = '893f2bfe7cce98078fcd5168f7618466';
const OPEN_WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5';
const OPEN_WEATHER_COUNTRY = 'us';

const forecastUrl =
  `${OPEN_WEATHER_API_URL}/forecast?appid=${OPEN_WEATHER_API_KEY}`;

// Why this? -> keep action types consistent between reducers and actions
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${forecastUrl}&q=${city},${OPEN_WEATHER_COUNTRY}`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    // Pass request (a promise) as payload redux-promise will stop action until promise
    // is resolved, after resolved it triggers a new action with the same data
    // with the same name.
    payload: request
  }
}
