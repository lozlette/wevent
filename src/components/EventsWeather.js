import React from 'react'
import axios from 'axios'


class EventsWeather extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      weather: {}

    }

    this.checkEventWeather = this.checkEventWeather.bind(this)
  }

  componentDidMount() {
    axios.get('http://api.weatherunlocked.com/api/current/55.37,3.436?app_id=e1d52047&app_key=f661656492325936d90c42a2a8485541')
      .then(response => this.setState({weather: response.data}))
  }

  checkEventWeather() {
    if(this.state.weather.temp_c === '1'){
      console.log('its cold')
    }
  }

  render() {
    if(!this.state) return null
    return (
      <div id="weather">
        <h1>{this.state.weather.temp_c}º</h1>
        <h1>{this.checkEventWeather}</h1>
      </div>
    )

  }
}


export default EventsWeather