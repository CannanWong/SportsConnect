import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";
import { addCount } from './handles/addInterested';

function Event() {
  const key = useLocation().state
  const [currEvent, setCurrEvent] = useState([])
  const [count, setCount] = useState([])

  useEffect(() => {
		fetchEvent(key.entryId, setCurrEvent, setCount)
	}, [key.entryId])


  return (
    <div className="container text-center">
      <div className="card"> 
      <div className="card-body">
        <h5 className="card-title">{currEvent.title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{currEvent.date} From: {currEvent.startTime} To: {currEvent.endTime}</h6>
        <p className="card-text">{currEvent.description}</p>
        <p className="interest-count">{count}</p>
        <button onClick={() => addCount(key.entryId, setCount)}>I'm interested!!</button>
      </div>
    </div>
    </div>
  );
}
 
export default Event;
