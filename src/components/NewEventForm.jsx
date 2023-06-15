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
	const grpLink = useRef();
	const sport = useRef();
	
	const submithandler = (e) => {
    e.preventDefault();

		// Check if location is set
		if (!location) {
			// Popup an error message
			alert('Please select a location for the event');
			return;
		}

		const form = e.currentTarget;

		if (!form.checkValidity()) {
			e.preventDefault();
			e.stopPropagation();
			form.classList.add('was-validated');
			return;
		}

		form.classList.add('was-validated');

		// Encapsulate the date in a Date object and format it
		const formattedDate = new Date(date.current.value).toLocaleDateString('en-GB', {
			weekday: 'short', // Mon
			day: 'numeric', // 17
			month: 'short', // Jun
			year: 'numeric' // 2023
		});
		
		// Create an event object
		const event = {
			title: title.current.value,
			date: (formattedDate.toString()),
			startTime: start.current.value,
			endTime: end.current.value,
			location: new GeoPoint(location.lat, location.lng),
			description: description.current.value,
			grpLink: grpLink.current.value,
			sport: sport.current.value,
			count: 0
		};

    handleSubmit('events', event);

		// Clear the form
		title.current.value = ""
		date.current.value = ""
		start.current.value = ""
		end.current.value = ""
		setLocation(null);
		description.current.value = ""
		grpLink.current.value = ""
		sport.current.value = ""

		form.classList.remove('was-validated');

  };

  return (
		<div className="row justify-content-center text-center">
			<div className="col-6"> 
				<br/>
				<br/>
				<h2>ADD NEW EVENT</h2>
				<form onSubmit={submithandler} className="needs-validation" noValidate>
					<div className="row my-4 align-items-center">
						<div className="col-12">
							<label className="form-label">Event Title:</label>
							<input type= "text" className="form-control" ref={title} required/>
							<div class="invalid-feedback">
        				Please enter an event title.
      				</div>
						</div>
					</div>
					<div className="row my-4 align-items-center">
						<div className="col-12">
							<label className="form-label">Sport:</label>
							<input type= "text" className="form-control" ref={sport} required/>
							<div class="invalid-feedback">
        				Please enter a sport.
      				</div>
						</div>
					</div>
					<div className="row my-4 align-items-start">
						<div className="col-4">
							<label className="form-label">Date:</label>
							<input type= "date" className="form-control" ref={date} required/>
							<div class="invalid-feedback">
        				Please enter an event date.
      				</div>
						</div>
						<div className="col-4">
							<label className="form-label">Start Time:</label>
							<input type= "time" className="form-control" ref={start} required/>
							<div class="invalid-feedback">
        				Please enter event start time.
      				</div>
						</div>
						<div className="col-4">
							<label className="form-label">End Time:</label>
							<input type= "time" className="form-control" ref={end} required/>
							<div class="invalid-feedback">
								Please enter event end time.
							</div>
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
							<textarea className="form-control" rows="3" ref={description} required> </textarea>
							<div class="invalid-feedback">
        				Please enter an event description.
      				</div>
						</div>
					</div>
					<div className="row my-4 align-items-center">
						<div className="col-12">
							<label className="form-label">Group Chat Link:</label>
							<input type= "text" className="form-control" ref={grpLink} required/>
							<div class="invalid-feedback">
        				Please provide an event groupchat link.
      				</div>
						</div>
					</div>
					<div className="row my-4 align-items-center">
							<button type = "submit" className='btn btn-light border'>Add Event</button>
					</div>
				</form>
			</div>
		</div>
  );
}

export default NewEventForm;