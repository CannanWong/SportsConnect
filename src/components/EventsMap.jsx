import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from "./Filters";

function EventsMap(props) {
	const mapRef = useRef(null);
	const autocompleteRef = useRef(null);
	const navigate = useNavigate();

	const handleScriptLoad = () => {
    const autocompleteInput = document.getElementById('autocomplete-input-eventsMap');
    autocompleteRef.current = new props.google.maps.places.Autocomplete(autocompleteInput);
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

	const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry && place.geometry.location && mapRef.current) {
      const location = place.geometry.location;
      const newCenter = { lat: location.lat(), lng: location.lng() };
      mapRef.current.panTo(newCenter);
    }
  };

	const goToEvent = (id) => {
		navigate("/event", {state:{ entryId: id }})
	}

	return (
		<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
			<div className='row justify-content-start align-items-start'>
				<div className='col-8'>
					<input
						id="autocomplete-input-eventsMap"
						type="text"
						placeholder="Search for a location"
						style={{ width: '100%', height: '40px', fontSize: '16px', padding: '0 10px' }}
					/>
				</div>
				<div className='col-4'>
      		<Filters events={props.events} />
				</div>
			</div>
			<br />
			<div className='row justify-content-center align-items-start'>
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
							position={{ lat: item[0].location.latitude, lng: item[0].location.longitude }}
							onClick={() => goToEvent(item[1])}
						/>
					)}
				</Map>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
			</div>

		</div>
			
	);
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(EventsMap);
