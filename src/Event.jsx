import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";
import EventLocationMap from './components/EventLocationMap';
import { ToggleButton } from '@material-ui/lab';
import { styled } from '@material-ui/styles';
import { modifyCount } from './handles/modifyCount';

function Event(props) {
  const key = useLocation().state
  const [currEvent, setCurrEvent] = useState([])
  const [count, setCount] = useState([])
  const [interested, setInterested] = useState(true)

  const StyledToggle = styled(ToggleButton)({
    "&&, &&:hover": {
      color: "white",
      backgroundColor: '#0d6efd'
    },
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: '#0a3ebd'
    }
  });

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
        <button class="btn btn-primary" data-bs-toggle="button" onClick={() => modifyCount(key.entryId, interested, setCount, setInterested)} >I'm interested!!</button>
        <a href={"//"+currEvent.grpLink} class="btn btn-outline-primary m-1" >Group Chat Link</a>
      </div>
    </div>
    </div>
  );
}
 
export default Event;

/*<StyledToggle
value="check"
selected={selected}
onChange={() => {
  setSelected(!selected);
}}
>
I'm interested!!!
</StyledToggle>*/