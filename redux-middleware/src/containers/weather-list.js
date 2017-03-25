import React, { Component } from 'react';
import { connect } from 'react-redux';

import SparklinesChart from '../components/sparklines-chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {
  render() {
    return (
      <table className="weather-list table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    // cleanup
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;

    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><SparklinesChart data={temps} color="orange" units="K" /></td>
        <td><SparklinesChart data={pressures} color="green" units="hPa" /></td>
        <td><SparklinesChart data={humidities} color="black" units="%" /></td>
      </tr>
    )
  }
}

function mapStateToProps({weather}) {
  // console.log(weather);
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
