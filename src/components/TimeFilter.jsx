function TimeFilter(props) {
  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Time
  		</button>
			<ul class="dropdown-menu">
				<li>
					<label class="form-check-label"> Start: </label>
					<input class="form-control" type="time" id="start" />
				</li>
				<li>
					<label class="form-check-label"> End: </label>
					<input class="form-control" type="time" id="end" />
				</li>
			</ul>
		</div>
	)
}

export default TimeFilter;