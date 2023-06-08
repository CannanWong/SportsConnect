import { Link } from 'react-router-dom';

function EventsListElem ({ event, id }) {
  return (
    <div className="card"> 
    {/* style="width: 18rem;"> */}
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{event.date} From: {event.startTime} To: {event.endTime}</h6>
        <p className="card-text">{event.description}</p>
        <Link to='event' state={{ entryId: id }}>
          Find out more
        </Link>
      </div>
    </div>
  )
}

export default EventsListElem;