function EventsListElem ({ event }) {
  return (
    <div className="card"> 
    {/* style="width: 18rem;"> */}
      <div className="card-body">
        <h5 className="card-title">{event.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{event.date} From: {event.startTime} To: {event.endTime}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">At: {event.location}</h6>
        <p className="card-text">{event.description}</p>
      </div>
    </div>
  )
}

export default EventsListElem;