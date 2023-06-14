import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';
import { fetchEvent } from './handles/fetchEvent';
import { useEffect, useState } from "react";
import EventLocationMap from './components/EventLocationMap';
import { modifyCount } from './handles/modifyCount';
import CommentSection from './components/CommentSection'
import { fetchDocs } from './handles/fetchDocs';
import ParticipantsList from './components/ParticipantsList';
import QRCode from 'react-qr-code'

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
                  <hr/>
                  <p className="d-flex card-text overflow-auto">{currEvent.description}</p>
                  <hr/>
                    <h4 className="my-2 text-left">Participants:</h4>
                    <ParticipantsList participants={participants} />
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
                <div class="d-grid gap-3">
                  <button 
                    class="btn btn-outline-danger w-100" 
                    data-bs-toggle="button" 
                    onClick={() => modifyCount(key.entryId, interested, setCount, setInterested, setParticipants)} >
                    I'm interested!!
                    <img src={require("./heart.png")} width="25" height="25" alt="Interested "/>
                  </button>
                  <div className='row'>
                    <div className='col-9 my-4'>
                      <div class="card w-100 h-40 border-primary text-center text-primary" style={{textDecoration: "none"}}><p className='my-1'> Group Chat: {currEvent.grpLink}</p></div>
                    </div>
                    <div className='col-2 mx-2'>
                      <QRCode value={"//"+currEvent.grpLink} size={96}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <CommentSection comments={comments} id={id} />
      <br/>
      <br/>
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