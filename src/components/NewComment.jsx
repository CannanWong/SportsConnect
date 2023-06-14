import handleSubmit from '../handles/handlesubmit';
import { useRef } from 'react';
import { doc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from "../firebase_setup/firebase";

function NewComment (props) {
	// Create references to the input fields
	const text = useRef();
	
	const submithandler = async (e) => {
    e.preventDefault();
		// Create an event object
    const testUser = (await getDoc(doc(db, "presetUser", "testUser"))).data().name
		const comment = {
			text: text.current.value,
			user: testUser,
      timestamp: serverTimestamp()
		};

    handleSubmit("events/"+props.id+"/comments", comment);

	  // Clear the form
	  text.current.value = ""
  };
 
  return (
    <div className = "container-fluid mx-4 my-4 text-left justify-content-left">
		  <div className="row">
		  		<h2>Post a comment!</h2>
	        <form onSubmit={submithandler}>
	        	<div className="row mx-3 my-2 justify-contents-center">
	        		<div className="ml-auto" style={{width: "96%"}}>
                <textarea className="form-control" rows="3" ref={text}></textarea>
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