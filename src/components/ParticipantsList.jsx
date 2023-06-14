function ParticipantsList(props) {
	if (props.participants.length === 0) {
		return <p className="mx-auto">Be the first one to join this event!</p>
	} else {
		return (
			<ul class="list-group text-left justify-content-between overflow-auto">
        {props.participants.map(item => <li class="list-group-item">{item[0].name}</li>)}
		  </ul>
		);
	}	
}

export default ParticipantsList;