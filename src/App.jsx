import ViewToggle from "./components/ViewToggle";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { fetchDocs } from "./handles/fetchDocs";

function App(props) {
	const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    fetchDocs('events', setAllEvents);
  }, []);

  return (
    <div className="container-fluid text-center">
      <hr/>
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS</h2>
          <br/>
          <ViewToggle allEvents={allEvents} google={props.google} />
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
