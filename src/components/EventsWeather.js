import React from 'react'
import axios from 'axios'


class EventsWeather extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      weather: []

    }
    // this.checkEventWeather = this.checkEventWeather.bind(this)
  }

  componentDidMount() {
    axios.get('http://api.weatherunlocked.com/api/current/55.37,3.436', {
      params: {
        app_id: 'e1d52047',
        app_key: 'f661656492325936d90c42a2a8485541'
      }
    })
      .then(response => this.setState({weather: response.data}))
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/', {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021'
      }
    })
      .then(response => this.setState({events: response.data.results}))
  }

  // checkEventWeather() {
  //   console.log(this.state.weather)
  //   if(this.state.weather.temp_c === '1'){
  //     console.log('its cold')
  //   }
  // }

  render() {
    // console.log(this.state.weather)
    // console.log(this.state.events)
    if(!this.state.weather) return null
    return (
      <div id="weather">
        <h1>{this.state.weather.temp_c}º</h1>
      </div>
    )

  }
}


export default EventsWeather
