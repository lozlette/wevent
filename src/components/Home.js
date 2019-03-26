// let town
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import EventsWeather from './EventsWeather'
// import EventsTown from './EventsTown'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      town: '',
      weather: []
    }

    this.towns = {
      'Manchester': { lat: 53.4839, lng: -2.2446 },
      'Bournemouth': { lat: 50.7208, lng: -1.9047 },
      'Aberdeen': { lat: 57.1496, lng: -2.0990},
      'Liverpool': { lat: 53.4105, lng: -2.9779},
      'London': { lat: 51.5098, lng: -0.1180}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getWeather = this.getWeather.bind(this)
  }

  handleChange(e) {
    this.setState({ latLng: this.towns[e.target.value], town: e.target.value }, () => this.getWeather())
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.get(`https://www.skiddle.com/api/v1/events/search/?api_key=0c64ae5cca7903c86353520198c58021&${this.state.latLng}&radius=5`)
      .then(response => this.setState({eventsLocation: response.data.results}))
      .then(() => this.props.history.push(`/events/search/${this.state.town}`))
  }

  getWeather(){
    const {lat, lng} = this.state.latLng
    axios.get(`http://api.weatherunlocked.com/api/current/${lat},${lng}`, {
      params: {
        app_id: 'e1d52047',
        app_key: 'f661656492325936d90c42a2a8485541'
      }
    })
      .then(response => this.setState({weather: response.data}))
  }

  render() {
    console.log('weather', this.state.weather)
    console.log('latlng', this.state.latLng)
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
                <h1 className="title is-3" id="subtitle">Hot/cold and don&apos;t know where to go? We&apos;ll sort you out!</h1>
                <h1 className="title is-5" id="subtitle">Find the best event near you based on the weather</h1>

                <form>
                  <select defaultValue="Please select a town" onChange={this.handleChange}>
                    <option disabled>Please select a town</option>
                    {Object.keys(this.towns).map(town =>
                      <option key={town}> {town} </option>
                    )}
                  </select>
                  <Link disabled={!this.state.town} className="button" to={{
                    pathname: '/events',
                    state: this.state
                  }}>Search</Link>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Home
