function ParticipantsList(props) {
	if (!props.participants) {
		return <p className="mx-auto">Be the first one to join this event!</p>
	} else {
		return (
			<div className="container text-left justify-content-around">
        <div className="card">
          <h2 className="card-title mx-4 my-4">Participants:</h2>
			    <ul class="list-group border-white text-left justify-content-between overflow-auto my-2">
            {props.participants.map(item => <li class="list-group-item mx-auto" style={{width: "90%"}}>{item[0].name}</li>)}
		  	  </ul>
        </div>
		  </div>
		);
	}	
}

export default ParticipantsList;