import handleSubmit from '../handles/handlesubmit';
import { useRef } from 'react';

function NewEventForm () {
	const title = useRef()
	const date = useRef()
	const start = useRef()
	const end = useRef()
	const location = useRef()
	const description = useRef()
	
	const submithandler = (e) => {
    e.preventDefault()
		const event = {
			title: title.current.value,
			date: date.current.value,
			start: start.current.value,
			end: end.current.value,
			location: location.current.value,
			description: description.current.value
		}

    handleSubmit(event)

		title.current.value = ""
		date.current.value = ""
		start.current.value = ""
		end.current.value = ""
		location.current.value = ""
		description.current.value = ""
  }
 
  return (
	<form onSubmit={submithandler} className="row g-3">
		<div className="col-md-12">
			<label className="form-label">Event Title:</label>
			<input type= "text" className="form-control" ref={title} />
		</div>
		<div className="col-md-4">
			<label className="form-label">Date:</label>
			<input type= "date" className="form-control" ref={date} />
		</div>
		<div className="col-md-4">
			<label className="form-label">Start Time:</label>
			<input type= "time" className="form-control" ref={start} />
		</div>
		<div className="col-md-4">
			<label className="form-label">End Time:</label>
			<input type= "time" className="form-control" ref={end} />
		</div>
		<div className="col-md-12">
			<label className="form-label">Location:</label>
			<input type= "text" className="form-control" ref={location} />
		</div>
		<div className="col-md-12">
			<label className="form-label">Event Description:</label>
			<textarea className="form-control" rows="3" ref={description}></textarea>
		</div>
		<button type = "submit">Add Event</button>
	</form>
  );
}

export default NewEventForm;