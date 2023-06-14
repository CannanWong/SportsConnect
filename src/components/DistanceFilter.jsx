import { useState } from "react";

function DistanceFilter(props) {
	const [dist, setDist] = useState(10.5);

  const handleSliderChange = (event) => {
    setDist(event.target.value);
  };

  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Search Distance
  		</button>
			<ul class="dropdown-menu">
				<li>
					<input
						type="range"
						className="form-range"
						id="distanceFilterSlider"
						min="0.5"
						max="10.5"
						step="0.5"
						value={dist}
						onChange={handleSliderChange}
      		/>
					{dist > 10 ? <label>10+ km</label> : <label>{dist}km</label>}
				</li>	
			</ul>
		</div>
	)
}

export default DistanceFilter;