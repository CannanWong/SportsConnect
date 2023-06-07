import { useEffect, useState } from "react";
import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import { fetchDocs } from "./handles/fetchDocs";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		fetchDocs('events', setEvents);
	}, [])

  return (
    <div className="container text-center">
      <hr/>
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS!!!</h2>
          <br/>
          <EventsList events={events} />
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
