function SportsFilter(props) {
	const sports = [...props.sports]
  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Sport
  		</button>
			<ul class="dropdown-menu">
				{sports.map((sport) => (
					<li>
						<input class="form-check-input" type="checkbox" value="" id={sport} />
						<label class="form-check-label" for={sport}> {sport} </label>
					</li>
				))}
			</ul>
		</div>
	)
}

export default SportsFilter;