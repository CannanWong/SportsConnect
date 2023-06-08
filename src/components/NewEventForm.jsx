import handleSubmit from '../handles/handlesubmit';
import { useRef, useState } from 'react';
import { GeoPoint } from 'firebase/firestore';
import LocationPicker from './LocationPicker';

function NewEventForm (props) {
	// Create references to the input fields
	const title = useRef();
	const date = useRef();
	const start = useRef();
	const end = useRef();
	const [location, setLocation] = useState();
	const description = useRef();
	
	const submithandler = (e) => {
    e.preventDefault();
		// Create an event object
		const event = {
			title: title.current.value,
			date: date.current.value,
			startTime: start.current.value,
			endTime: end.current.value,
			location: new GeoPoint(location.lat, location.lng),
			description: description.current.value
		};

    handleSubmit('events', event);

		// Clear the form
		title.current.value = ""
		date.current.value = ""
		start.current.value = ""
		end.current.value = ""
		setLocation(null);
		description.current.value = ""
  };

  // const handleLocationChange = (newLocation) => {
  //   setLocation(newLocation);
  // };
 
  return (
		//  className="row g-3 align-items-center">
	<form onSubmit={submithandler}>
		<div className="row my-4 align-items-center">
			<div className="col-12">
				<label className="form-label">Event Title:</label>
				<input type= "text" className="form-control" ref={title} />
			</div>
		</div>
		<div className="row my-4 align-items-center">
			<div className="col-4">
				<label className="form-label">Date:</label>
				<input type= "date" className="form-control" ref={date} />
			</div>
			<div className="col-4">
				<label className="form-label">Start Time:</label>
				<input type= "time" className="form-control" ref={start} />
			</div>
			<div className="col-4">
				<label className="form-label">End Time:</label>
				<input type= "time" className="form-control" ref={end} />
			</div>
		</div>
		<div className="row my-4 align-items-center">
			<div className="col-12">
				<label className="form-label">Location:</label>
					<LocationPicker
						google={props.google}
						initialCenter={{ lat: 51.506729, lng: -0.171589 }} // Specify initial center coordinates
						onChange={setLocation}
						position={location}
					/>
				<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>
		</div>
		<div className="row my-4 align-items-center">
			<div className="col-12">
				<label className="form-label">Event Description:</label>
				<textarea className="form-control" rows="3" ref={description}></textarea>
			</div>
		</div>
		<div className="row my-4 align-items-center">
				<button type = "submit" className='btn btn-primary'>Add Event</button>
		</div>
	</form>
  );
}

export default NewEventForm;