function SportsFilter(props) {

	const handleCheckboxChange = (event) => {
		const sport = event.target.id;
		const checked = event.target.checked;
		let temp = new Set(props.filters.sports);
		if (checked) {
			temp.add(sport);
		} else {
			temp.delete(sport);
		}
		props.setFilters({ ...props.filters, sports: temp })
	}

  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Sport
  		</button>
			<ul class="dropdown-menu">
				{[...props.sports].map((sport) => (
					<li>
						<input 
							class="form-check-input" 
							type="checkbox" 
							id={sport} 
							style={{ marginRight: "10px", marginLeft: "10px" }} 
							onChange={handleCheckboxChange}
						/>
						<label class="form-check-label" for={sport}> {sport} </label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SportsFilter;