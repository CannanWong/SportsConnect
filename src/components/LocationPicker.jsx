import { useRef } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function LocationPicker(props) {
  const mapRef = useRef(null);
	const autocompleteRef = useRef(null);

	const handleScriptLoad = () => {
    const autocompleteInput = document.getElementById('autocomplete-input-newEvent');
    autocompleteRef.current = new props.google.maps.places.Autocomplete(autocompleteInput);
    autocompleteRef.current.addListener('place_changed', handlePlaceSelect);
  };

	const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place.geometry && place.geometry.location && mapRef.current) {
      const location = place.geometry.location;
      const coords = { lat: location.lat(), lng: location.lng() };
      mapRef.current.panTo(coords);
			props.onChange(coords);
    }
  };
  
	const handleMapClick = (_, map, clickEvent) => {
    const { latLng } = clickEvent;
		props.onChange({ lat: latLng.lat(), lng: latLng.lng()});
  };

	return (
		<div style={{ justifyContent: "start" }}>
			<input
        id="autocomplete-input-newEvent"
        type="text"
        placeholder="Search here or click on the map to select a location"
        style={{ width: '100%', height: '40px', fontSize: '16px', padding: '0 10px' }}
      />
			<Map
				google={props.google}
				zoom={14}
				initialCenter={props.initialCenter}
				onClick={handleMapClick}
				onReady={(mapProps, map) => {
					mapRef.current = map;
					handleScriptLoad();
				}}
				style={{ overflowX: "hidden", overflowY: "hidden" }}
				containerStyle={{ maxWidth: "48.7%", maxHeight: "400px" }}
			>
				{props.position && (
					<Marker
						position={props.position}
						draggable
						onDragend={(t, map, coord) => {
							props.onChange({ lat: coord.latLng.lat(), lng: coord.latLng.lng()});
						}}
						onClick={(t, map, coord) => {
							props.onChange(null);
						}}
					/>
				)}
			</Map>
		</div>
  );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(LocationPicker);
  