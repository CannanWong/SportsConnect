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
	<form onSubmit={submithandler} class="row g-3">
		<div class="col-md-12">
			<label class="form-label">Event Title:</label>
			<input type= "text" class="form-control" ref={title} />
		</div>
		<div class="col-md-4">
			<label class="form-label">Date:</label>
			<input type= "date" class="form-control" ref={date} />
		</div>
		<div class="col-md-4">
			<label class="form-label">Start Time:</label>
			<input type= "time" class="form-control" ref={start} />
		</div>
		<div class="col-md-4">
			<label class="form-label">End Time:</label>
			<input type= "time" class="form-control" ref={end} />
		</div>
		<div class="col-md-12">
			<label class="form-label">Location:</label>
			<input type= "text" class="form-control" ref={location} />
		</div>
		<div class="col-md-12">
			<label class="form-label">Event Description:</label>
			<textarea class="form-control" rows="3" ref={description}></textarea>
		</div>
		<button type = "submit">Add Event</button>
	</form>
  );
}

export default NewEventForm;