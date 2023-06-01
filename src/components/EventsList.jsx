import { db } from "../firebase_setup/firebase";
import { useState, useEffect } from "react";
import EventsListElem from "./EventsListElem";
import { collection, getDocs } from "firebase/firestore";

function EventsList() {
	const [events, setEvents] = useState([]);
	
	const fetchEvents = async () => {
		const eventsRef = collection(db, 'events');
		const querySnapshot = await getDocs(eventsRef);
		const data = querySnapshot.docs.map((doc) => doc.data());
		setEvents(data);
	};

	useEffect(() => {
		fetchEvents();
	}, [])

	if (!events) {
		return <h2>No events found</h2>
	} else {
		console.log(events);
		return (
			<div>
				{events.map(item => <div> <EventsListElem event={item} /> <br/> </div>)}
			</div>
		);
	}	
}

export default EventsList;