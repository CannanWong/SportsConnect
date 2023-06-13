import { useEffect, useState } from "react";
import ViewToggle from "./components/ViewToggle";
import { fetchDocs } from "./handles/fetchDocs";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
		fetchDocs('events', setEvents);
	}, [])

  return (
    <div className="container-fluid text-center p-3 mb-2 bg-rice text-dark">
      <br/>
			<div className="row justify-content-center">
				<div className="col-6"> 
          <h2>EVENTS</h2>
          <br/>
          <ViewToggle events={events} google={props.google} />
        </div>
      </div>
      <hr style={{width: "100%"}}/>
      <br/>
    </div>
  );
}
 
export default App;
