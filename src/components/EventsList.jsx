import { firestore } from "../firebase_setup/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function EventsList() {
	return (
		<h2>
			No events found
		</h2>
	);
}
// 	const events = getEvents();

// 	if (!events) {
// 		return (
// 			<h2>
// 				No events found
// 			</h2>
// 		);
// 	}

// 	return (
// 		<ul className="list-group">
// 			events.map((event) => {
// 				<li className="list-group-item"> <EventsListElem> event </EventsListElem> </li>
// 			})
// 		</ul>
// 	);
// }

// function getEvents() {
// 	const [events, setEvents] = useState([]);

// }
export default EventsList;