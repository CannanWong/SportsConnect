import ViewToggle from "./components/ViewToggle";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { useEffect, useState } from "react";
import { fetchDocs } from "./handles/fetchDocs";

function App(props) {
	const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    // populates events array with all events from database
    fetchDocs('events', setAllEvents);
  }, []);
    
  // sort events by time, then by date -> chronological order
  allEvents.sort(timeComparator);
  allEvents.sort(dateComparator);

  // Used once to change format of dates in database
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
    <div className="container-fluid text-center p-3 mb-2 bg-rice text-dark">
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS</h2>
          <br/>
          <ViewToggle allEvents={allEvents} google={props.google} />
        </div>
      </div>
      <hr style={{width: "100%"}}/>
      <br/>
    </div>
  );
}
 
function dateComparator(a, b) {
  const dateA = new Date(a[0].date);
  const dateB = new Date(b[0].date);
  return dateA - dateB;
}

function timeComparator(a, b) {
  const timeA = a[0].startTime;
  const timeB = b[0].startTime;

  // Split the times into hours and minutes
  const [hoursA, minutesA] = timeA.split(":");
  const [hoursB, minutesB] = timeB.split(":");

  // Convert hours and minutes to numbers for comparison
  const timeValueA = parseInt(hoursA, 10) * 60 + parseInt(minutesA, 10);
  const timeValueB = parseInt(hoursB, 10) * 60 + parseInt(minutesB, 10);

  // Compare the time values
  return timeValueA - timeValueB;
}

export default App;
