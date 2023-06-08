import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";

function Event() {
  const key = useLocation().state
  const [currEvent, setCurrEvent] = useState([]);

  useEffect(() => {
		fetchEvent(key.entryId, setCurrEvent)
	}, [key.entryId])


  return (
    <div className="container text-center">
      <p>{key.eventName}</p>
      <p>{key.entryId}</p>
      <p>{currEvent.title}</p>
    </div>
  );
}
 
export default Event;
