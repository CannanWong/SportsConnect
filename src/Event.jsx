import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";
import { addCount } from './handles/addInterested';
import EventLocationMap from './components/EventLocationMap';

function Event(props) {
  const key = useLocation().state
  const [currEvent, setCurrEvent] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
		fetchEvent(key.entryId, setCurrEvent, setCount)
	}, [key.entryId])

  return (
    <div className="container text-center justify-content-center">
      <div className="card"> 
      <div className="card-body">
        <h2 className="card-title">{currEvent.title}</h2>
        <h4 className="card-subtitle mb-2 text-body-secondary">{currEvent.date} From: {currEvent.startTime} To: {currEvent.endTime}</h4>
        <p className="card-text">{currEvent.description}</p>
        <h3 className="card-text">{"Interested: "+count+" !"}</h3>
        <br/><br/>
        {currEvent.location && 
        <EventLocationMap 
          google={props.google} 
          location={{ lat: currEvent.location.latitude, lng: currEvent.location.longitude }} 
        />}
        <br/><br/>
        <button onClick={() => addCount(key.entryId, setCount)} class="btn btn-primary m-1" data-bs-toggle="button" aria-pressed="true" autocomplete="off" >I'm interested!!</button>
        <button class="btn btn-outline-primary m-1" >Group Chat Link</button>
        <button type="button" class="btn btn-primary" data-toggle="button" data-bs-toggle="button" aria-pressed="true" autocomplete="off">
  Single toggle
</button>
      </div>
    </div>
    </div>
  );
}
 
export default Event;
