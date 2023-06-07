import { useRef, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function LocationPicker(props) {
  const [position, setPosition] = useState(null);
  const mapRef = useRef(null);
  
	const handleMapClick = (_, map, clickEvent) => {
    const { latLng } = clickEvent;
    setPosition(latLng);
		props.onChange(latLng);
  };

	return (
			<Map
				google={props.google}
				zoom={14}
				initialCenter={props.initialCenter}
				onClick={handleMapClick}
				onReady={(mapProps, map) => {
					mapRef.current = map;
				}}
				style={{ overflowX: "hidden", overflowY: "hidden" }}
				containerStyle={{ maxWidth: "48%", maxHeight: "400px" }}
			>
				{position && (
					<Marker
						position={position}
						draggable
						onDragend={(t, map, coord) => {
							setPosition(coord.latLng);
							props.onChange(coord.latLng);
						}}
						onClick={(t, map, coord) => {
							setPosition(null);
							props.onChange(null);
						}}
					/>
				)}
			</Map>
  );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(LocationPicker);
  