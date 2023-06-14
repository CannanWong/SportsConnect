function DistanceFilter(props) {
	const dist = props.filters.distance;

  const handleSliderChange = (event) => {
		const dist = event.target.value;
		props.setFilters({ ...props.filters, distance: dist });
  };

  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Search Distance
  		</button>
			<ul class="dropdown-menu">
				<li>
					{props.searchLocation === null ?
					<label>Enter a location first</label>
					:
					<div>
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
						{dist > 10 ? <label>Unlimited</label> : <label>{dist}km</label>}
					</div>
					}
				</li>	
			</ul>
		</div>
	)
}

export default DistanceFilter;
