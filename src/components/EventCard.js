import React from 'react'
import { Link } from 'react-router-dom'
const EventCard = ({ id, eventname, description, venue, largeimageurl, date, openingtimes }) => {

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="card-header-title title is-6"> {eventname} </h1>
      </div>
      <Link to={`/events/${id}`}>
        <div className="card-image">
          <figure className="image">
            <img src={largeimageurl} alt={eventname} width="300px"/>
          </figure>
        </div>
      </Link>
      <div className="card-content">
        <div className="content">
          <p>{date}</p>
          <br/>
          <p>{venue.address}</p>
          <p>{venue.postcode}</p>
        </div>
      </div>
    </div>

  )
}

export default EventCard
