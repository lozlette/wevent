import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EventsWeather from './EventsWeather'
// import EventsTown from './EventsTown'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      search: '',
      events: [],
      eventsLocation: [],
      town: '',
      latLng: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021')
      .then(response => this.setState({events: response.data.results}))
  }

  handleChange(e) {
    console.log(typeof e.target.value)
    const towns = {
      'Manchester': 'latitude=53.4839&longitude=-2.2446',
      'Bournemouth': 'latitude=50.7208&longitude=-1.9047',
      'Aberdeen': 'latitude=57.1496&longitude=-2.0990',
      'Liverpool': 'latitude=53.4105&longitude=-2.9779',
      'London': 'latitude=51.5098&longitude=-0.1180'
    }

    this.setState({ latLng: towns[e.target.value], town: e.target.value })
  }

  handleSubmit(e) {
    axios.get(`https://cors-anywhere.herokuapp.com/https://www.skiddle.com/api/v1/events/search/?api_key=f349a5651e958a0953951d2835d33758
&${this.state.latLng}&radius=5`)
      .then(response => this.setState({eventsLocation: response.data.results}))
      .then(() => this.props.history.push(`/events/search/${this.state.town}`))
    e.preventDefault()
    console.log('SUBMITTED!!!!!!!', this.state.eventsLocation)
  }

  // console.log(location)
  // axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021&${manchesterLatLng}&radius=5`)
  //   .then(response => this.setState({search: response.data.results}))


  render() {
    if(!this.state.events[0]) return null
    // console.log(this.state.search)

    // const town = this.state.events.filter(event => event.venue.town)
    // // console.log(town)
    return (

      <section className="hero is-primary is-fullheight">
        <div className="background">
          <div className="container">
            <EventsWeather />
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="hero-body title-container">

              <div className="container home-container">
                <h1 className="title is-1" id="logo">Wevent</h1>
                <h1 className="title is-3" id="subtitle">Hot/cold and don't know where to go? We'll sort you out!</h1>
                <h1 className="title is-5" id="subtitle">Find the best event near you based on the weather</h1>
                <Link to={'/events/'} className="button">Search </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home


// <select onChange={this.handleChange} name="Location">
//   <option disabled selected value>Find my City</option>
//   {this.state.events.map((event, index) => <option key={index}
//   >{event.venue.town}</option>)}
// </select>
