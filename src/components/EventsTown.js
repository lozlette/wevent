import React from 'react'
import axios from 'axios'


class EventsTown extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      search: '',
      events: [],
      eventsLocation: [],
      town: '',
      latLng: ''
    }

  }
  componentDidMount() {
    axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021&${this.props.town}&radius=5`)
      .then(response => this.setState({events: response.data.results}))
  }


  render() {
    console.log(this.props.location.state)
    if(!this.state) return null
    // console.log(this.props)
    const { eventname, date, description, largeimageurl, entryprice } = this.state.events
    console.log(this.state)
    return (

      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.state.events.eventname}</h1>
          <hr />

          <div className="columns">
            <div className="column">
              <figure className="image">
                <img src={largeimageurl} alt={eventname} />
              </figure>
            </div>

            <div className="column">
              <h4 className="title is-4">{}</h4>
              <p>{description}</p>
              <hr />
              <h3>{date}</h3>
              <h3>{entryprice}</h3>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )

  }
}


export default EventsTown
