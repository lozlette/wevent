import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'

let eventType = ''

class EventsTown extends React.Component {
  constructor() {
    super()

    this.state = {
      events: [],
      weather: [],
      eventWeather: []
    }
    // this.weatherEvents.bind = this.weatherEvents.bind(this)
  }


  componentDidMount() {

    const { temp_c } = this.props.location.state.weather
    if(temp_c >= '20') {
      eventType = 'FEST'
    } else {
      eventType = 'LIVE'
    }

    const { lat, lng } = this.props.location.state.latLng
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/', {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021',
        latitude: lat,
        longitude: lng,
        radius: 5,
        eventcode: eventType
      }
    })
      .then(response => this.setState({events: response.data.results}))
  }


  // weatherEvents() {
  //   const { temp_c } = this.props.location.state.weather
  //   if(temp_c >= '20') {
  //     eventType = 'FEST'
  //   }
  // }

  render() {
    console.log(this.state.events)
    const {date} = this.state.events
    const { temp_c } = this.props.location.state.weather
    if(!this.state.events[0]) return null
    return (
      <main className="section">
        <div className="container">
          <h1>{temp_c}</h1>
          <h1>{date}</h1>
          <div className="columns is-multiline">
            {this.state.events.map((event, index) =>
              <div className="column is-one-quarter" key={index}>
                <EventCard {...event}/>
              </div>)}
          </div>
        </div>
      </main>
    )
  }
}

export default EventsTown
