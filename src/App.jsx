import { useEffect, useState } from "react";
import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
// import EventsMap from "./components/EventsMap";
import { fetchDocs } from "./handles/fetchDocs";
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		fetchDocs('events', setEvents);
	}, [])

  return (
    <div className="container-fluid text-center">
      <hr/>
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS!!!</h2>
          <br/>
          <EventsList events={events} />
          {/* <EventsMap 
            events={events} 
            google={props.google}
						initialCenter={{ lat: 51.506729, lng: -0.171589 }} // Specify initial center coordinates
          /> */}
        </div>
      </div>
      <hr/>
      <br/>
      <div className="row justify-content-center">
				<div className="col-6"> 
					<h2>ADD NEW EVENT</h2>
          <NewEventForm />
        </div>
			</div>
      <br/>
      <hr/>
      <br/>
    </div>
  );
}
 
export default App;
