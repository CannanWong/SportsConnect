import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useRef, useState } from 'react';

function EventsMap(props) {
	const mapRef = useRef(null);
	const autocompleteRef = useRef(null);

	const handleScriptLoad = () => {
    const autocompleteInput = document.getElementById('autocomplete-input-eventsMap');
    autocompleteRef.current = new props.google.maps.places.Autocomplete(autocompleteInput);
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

	const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
		console.log(place);
    if (place.geometry && place.geometry.location && mapRef.current) {
      const location = place.geometry.location;
      const newCenter = { lat: location.lat(), lng: location.lng() };
			console.log(newCenter);
      mapRef.current.panTo(newCenter);
    }
  };

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end" }}>
			<input
        id="autocomplete-input-eventsMap"
        type="text"
        placeholder="Search for a location"
        style={{ width: '100%', height: '40px', fontSize: '16px', padding: '0 10px' }}
      />
			<Map
				google={props.google}
				zoom={12}
				initialCenter={props.initialCenter}
				onReady={(mapProps, map) => {
					mapRef.current = map;
					handleScriptLoad();
				}}
				style={{ overflowX: "hidden", overflowY: "hidden" }}
				containerStyle={{ maxWidth: "80%", maxHeight: "80%" }}
			>
				{props.events.map(item => 
					<Marker
						position={{ lat: item.location.latitude, lng: item.location.longitude }}
					/>
				)}
			</Map>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

		</div>
			
	);
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(EventsMap);
