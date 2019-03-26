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

    // this.filterTown.bind = this.filterTown.bind(this)
  }

  componentDidMount() {

    const { temp_c } = this.props.location.state.weather
    if(temp_c >= '18') {
      eventType = 'FEST,SPORT,KIDS'
    } else {
      eventType = 'LIVE,CLUB'
    }

    const { lat, lng } = this.props.location.state.latLng
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/', {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021',
        latitude: lat,
        longitude: lng,
        radius: 5,
        eventcode: eventType,
        limit: 50
      }
    })
      .then(response => this.setState({events: response.data.results}))
  }

  // filterTown() {
  //   this.state.events.filter(event => {
  //     console.log(event.venue.town)
  //   })
  // }

  render() {
    console.log(this.state.events)
    const { temp_c } = this.props.location.state.weather
    if(!this.state.events[0]) return null
    return (
      <main className="section">
        <div className="container">
          <div className="temp-div">
            <h1 className="title is-2">{temp_c}º</h1>
            <h1 className="title is-2">{this.props.location.state.town}</h1>
          </div>
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
