function EventsListElem ({ event }) {
  return (
    <li>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
    </li>
  )
}