import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";
import EventLocationMap from './components/EventLocationMap';
import { modifyCount } from './handles/modifyCount';
import CommentSection from './components/CommentSection'
import { fetchDocs } from './handles/fetchDocs';
import ParticipantsList from './components/ParticipantsList';

function Event(props) {
  const key = useLocation().state
  const [currEvent, setCurrEvent] = useState([])
  const [count, setCount] = useState([])
  const [interested, setInterested] = useState(true)
  const [comments, setComments] = useState([])
  const [participants, setParticipants] = useState([])
  const id = key.entryId

  useEffect(() => {
		fetchEvent(id, setCurrEvent, setCount)
    fetchDocs("events/"+id+"/comments", setComments)
    fetchDocs("events/"+id+"/participants", setParticipants)
	}, [id])

  return (
    <div>
      <br/>
      <div className="container">
        <div className="card"> 
          <div className="card-body">
            <div className="row">
              {/* Event detail container */}
              <div className="col">
                <div className="container text-left justify-content-center">
                  <div className="d-flex justify-content-between">
                    <h1 className="card-title">{currEvent.title}</h1>
                    <h4 className="card-text float-end text-danger">
                    <img src={require("./heart.png")} width="30" height="30" alt="Interested "/>{" : "+count+" !"}</h4>
                  </div>
                  <h4 className="d-flex card-subtitle mb-2 text-body-secondary">{currEvent.date} From: {currEvent.startTime} To: {currEvent.endTime}</h4>
                  <br/>
                  <p className="d-flex card-text overflow-auto">{currEvent.description}</p>
                  <div className="card text-left">
                    <h5 className="mx-2 my-2">Participants:</h5>
                    <ParticipantsList participants={participants} />
                  </div>
                </div>
              </div>
              {/* Event location & interest & link container */}
              <div className="col">
                {currEvent.location && 
                <EventLocationMap 
                  google={props.google} 
                  location={{ lat: currEvent.location.latitude, lng: currEvent.location.longitude }} 
                />}
                <br/>
                <div class="d-grid gap-2">
                  <button 
                    class="btn btn-outline-danger w-100" 
                    data-bs-toggle="button" 
                    onClick={() => modifyCount(key.entryId, interested, setCount, setInterested, setParticipants)} >
                    I'm interested!!
                    <img src={require("./heart.png")} width="25" height="25" alt="Interested "/>
                  </button>
                  <a href={"//"+currEvent.grpLink} class="btn btn-outline-primary w-100" >Group Chat Link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <CommentSection comments={comments} id={id} />
    </div>
  );
}
 
export default Event;

/*

      <button type="button" class="btn btn-primary" onClick={() => {setShow(true)}}>
        Launch demo modal
      </button>
      <LinkModal show={showLink} />
*/