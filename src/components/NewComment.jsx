import handleSubmit from '../handles/handlesubmit';
import { useRef } from 'react';

function NewComment (props) {
	// Create references to the input fields
	const text = useRef();
	const user = useRef();
	
	const submithandler = (e) => {
    e.preventDefault();
		// Create an event object
		const comment = {
			text: text.current.value,
			user: user.current.value,
		};

    handleSubmit("events/"+props.id+"/comments", comment);

	  // Clear the form
	  text.current.value = ""
    user.current.value = ""
  };
 
  return (
    <div className = "container-fluid mx-4 my-4 text-left justify-content-left">
		  <div className="row">
		  		<h2>Post a comment!</h2>
	        <form onSubmit={submithandler}>
	        	<div className="row mx-3 my-2 justify-contents-center">
	        		<div className="ml-auto" style={{width: "96%"}}>
	        			<label className="form-label ml-auto">Comment:</label>
                <textarea className="form-control" rows="3" ref={text}></textarea>
	        		</div>
	        	</div>
	        	<div className="row mx-3 my-2 justify-contents-center">
	        		<div className="ml-auto" style={{width: "96%"}}>
	        			<label className="form-label">From:</label>
	        			<input type= "text" className="form-control" ref={user} />
	        		</div>
	        	</div>
	        	<div className="row my-4 justify-contents-center">
	        		<button type = "submit" className="btn btn-primary mx-auto" style={{width: "50%"}}>Post!</button>
	        	</div>
	        </form>
      </div>
    </div>
  );
}

export default NewComment;