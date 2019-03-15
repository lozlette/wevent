import React from 'react'
import axios from 'axios'
import EventCard from './EventCard'


class EventsTown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      events: [],
      eventsLocation: [],
      town: '',
      latLng: ''
    }

  }
  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021&${this.state.latLng}&radius=5`)
      .then(response => this.setState({eventsLocation: response.data.results}))
  }

  render() {
    console.log(this.state.latLng)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.eventsLocation.map((event, index) =>
              <div className="column is-one-half" key={index}>
                <EventCard {...event}/>
              </div>)}
          </div>
        </div>
      </section>
    )

  }
}


export default EventsTown
