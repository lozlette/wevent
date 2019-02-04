import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'
import EventsWeather from './EventsWeather'


class EventsIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      events: [],
      weather: []
    }
  }


  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/?api_key=f349a5651e958a0953951d2835d33758')
      .then(response => this.setState({events: response.data.results}))

    // axios.get('http://api.weatherunlocked.com/api/current/uk.nw103dl?app_id=e1d52047&app_key=f661656492325936d90c42a2a8485541')
    //   .then(response => this.setState({weather: response}))
  }


  render() {
    if(!this.state.events[0]) return null

    return (
      <main className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.events.map((event, index) =>
              <div className="column is-one-half" key={index}>
                <EventCard {...event}/>
              </div>)}
            <EventsWeather {...event}/>
          </div>
        </div>
      </main>
    )
  }
}

export default EventsIndex
