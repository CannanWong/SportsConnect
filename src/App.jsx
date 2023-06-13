import { useEffect, useState } from "react";
import ViewToggle from "./components/ViewToggle";
import { fetchDocs } from "./handles/fetchDocs";
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		fetchDocs('events', setEvents);
	}, [])

  // used once to change format of dates in database
  // const fixDates = () => {
  //   events.forEach(async event => {
  //     const formattedDate = new Date(event[0].date).toLocaleDateString('en-GB', {
  //       weekday: 'short', // Mon
  //       day: 'numeric', // 17
  //       month: 'short', // Jun
  //       year: 'numeric' // 2023
  //       });
  //         const eventRef = await doc(db, "events", event[1])
  //         updateDoc(eventRef, {date: formattedDate.toString()});

  //     });
  // }

  return (
    <div className="container-fluid text-center">
      <hr/>
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS</h2>
          <br/>
          <ViewToggle events={events} google={props.google} />
        </div>
      </div>
      <hr/>
      <br/>
      <br/>
      <hr/>
      <br/>
    </div>
  );
}
 
export default App;
