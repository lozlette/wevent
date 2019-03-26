import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'


class EventsTown extends React.Component {
  constructor() {
    super()

    this.state = {
      events: [],
      weather: []
    }
  }

  componentDidMount() {

    const { lat, lng } = this.props.location.state.latLng
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/', {
      params: {
        api_key: '0c64ae5cca7903c86353520198c58021',
        latitude: lat,
        longitude: lng,
        radius: 5
      }
    })
      .then(response => this.setState({events: response.data.results}))
  }

  render() {
    const { temp_c } = this.props.location.state.weather
    if(!this.state.events[0]) return null
    return (
      <main className="section">
        <div className="container">
          <h1>{temp_c}</h1>
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
