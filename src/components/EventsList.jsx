import EventsListElem from "./EventsListElem";

function EventsList(props) {
	if (!props.events) {
		return <h2>No events found</h2>
	} else {
		console.log(props.events);
		return (
			<div>
				{props.events.map(item => <div> <EventsListElem event={item} /> <br/> </div>)}
			</div>
		);
	}	
}

export default EventsList;