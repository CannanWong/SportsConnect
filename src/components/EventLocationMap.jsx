import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// Usage: <EventLocationMap google=props.google, location={{ lat: event.location.latitude, lng: event.location.longitude }} />
function EventLocationMap(props) {
	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end" }}>
			<Map
				google={props.google}
				zoom={16}
				initialCenter={props.location}
				style={{ overflowX: "hidden", overflowY: "hidden" }}
				containerStyle={{ maxWidth: "48%", maxHeight: "60%" }}
			>
				<Marker
						position={props.location}
				/>
			</Map>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		</div>
	);
}

export default GoogleApiWrapper({
	apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(EventLocationMap);