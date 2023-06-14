import EventsListElem from "./EventsListElem";
import Filters from "./Filters";
import { useState, useRef, useEffect } from "react";
import { distance } from "../handles/distance";
import { GoogleApiWrapper } from "google-maps-react";

function EventsList(props) {
	const autocompleteRef = useRef(null);
	const [mapLocation, setMapLocation] = useState(null);


	
	
	
	const allSports = new Set(props.allEvents.map(event => event[0].sport).filter(sport => sport != null));
	const [filters, setFilters] = useState({sports: new Set(), distance: 10.5, date: "", startTime: "", endTime: ""});
	
	const filterFunc = (event) => {
		return (
			(filters.sports.size === 0 || filters.sports.has(event[0].sport)) &&
			(filters.distance > 10 || mapLocation === null ||	
				filters.distance >= 
				distance(event[0].location, mapLocation)) &&
				// eslint-disable-next-line
				(filters.date === "" || filters.date == event[0].date) &&
				(filters.startTime === "" || filters.startTime < event[0].endTime) &&
				(filters.endTime === "" || filters.endTime > event[0].startTime)
		)
	}

	const filteredEvents = props.allEvents.filter(filterFunc);
	const displayEvents = mapLocation === null || filters.distance <= 10 ? 
													filteredEvents : 
													filteredEvents.sort((a, b) => 
														distance(a[0].location, mapLocation) - distance(b[0].location, mapLocation)	);
			
	const handleScriptLoad = () => {
		const autocompleteInput = document.getElementById('autocomplete-input-eventsMap');
		autocompleteRef.current = new props.google.maps.places.Autocomplete(autocompleteInput);
		autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
	};

	const handlePlaceSelect = () => {
		const place = autocompleteRef.current.getPlace();
		if (place && place.geometry && place.geometry.location) {
			const location = place.geometry.location;
			const newCenter = { lat: location.lat(), lng: location.lng() };
			setMapLocation(newCenter);
		}
	};

	const clearSelection = (e) => {
		if (e.target.value === "") {
			setMapLocation(null);
		}
	}

	useEffect(() => {
		handleScriptLoad();
	});

	return (
		<div>
			<div className='row justify-content-start align-items-start'>
				<div className='col' style={{ marginBottom: '8px' }}>
					<input
						id="autocomplete-input-eventsMap"
						type="text"
						placeholder="Search events near a location"
						style={{ width: '100%', height: '40px', fontSize: '16px', padding: '0 10px' }}
						onChange={clearSelection}
					/>
				</div>
			<div className='row justify-content-start align-items-start'>
				<div className='col'>
					<br/>
					<Filters searchLocation={mapLocation} filters={filters} setFilters={setFilters} sports={allSports} />
				</div>
			</div>
			</div>
			<br />
			{displayEvents.length === 0 ? 
				<h3>No events found</h3> : 
				displayEvents.map(item => <div> <EventsListElem event={item[0]} id={item[1]} /> <br/> </div>)}
		</div>
	);
}	

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(EventsList);
