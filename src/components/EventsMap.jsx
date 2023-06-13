import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Filters from "./Filters";
import { distance } from "../handles/distance";

function EventsMap(props) {
	const mapRef = useRef(null);
	const autocompleteRef = useRef(null);
	const navigate = useNavigate();

	const allSports = new Set(props.allEvents.map(event => event[0].sport).filter(sport => sport != null));
	const [filters, setFilters] = useState({sports: new Set(), distance: 10.5, date: "", startTime: "", endTime: ""});

	const filterFunc = (event) => {
		return (
			(filters.sports.size === 0 || filters.sports.has(event[0].sport)) &&
			(filters.distance > 10 || 
				(!autocompleteRef.current || !autocompleteRef.current.getPlace() || !autocompleteRef.current.getPlace().geometry || !autocompleteRef.current.getPlace().geometry.location ||
					filters.distance >= 
						distance(event[0].location, autocompleteRef.current.getPlace().geometry.location))) &&
			(filters.date === "" || filters.date === event[0].date) &&
			(filters.startTime === "" || filters.startTime < event[0].endTime) &&
			(filters.endTime === "" || filters.endTime > event[0].startTime)
		)
	}

	const filteredEvents = props.allEvents.filter(filterFunc);

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
      		<Filters searchLocation={autocompleteRef} filters={filters} setFilters={setFilters} sports={allSports} />
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
					{filteredEvents.map(item => 
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
