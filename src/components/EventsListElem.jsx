import { Link } from 'react-router-dom';

function EventsListElem ({ event, id }) {
  return (
    <div className="card"> 
    {/* style="width: 18rem;"> */}
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{event.date} </h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">{event.startTime} - {event.endTime}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">{event.sport}</h6>
        <Link to='event' state={{ entryId: id }}>
        <button class="btn btn-light btn-sm btn-outline-dark my-2 my-sm-0" type="submit">Find out more</button>
        </Link>
      </div>
    </div>
  )
}

export default EventsListElem;