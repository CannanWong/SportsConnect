function TimeFilter(props) {
	function handleStartChange(event) {
		const start = event.target.value;
		props.setFilters({ ...props.filters, startTime: start });
	}

	function handleEndChange(event) {
		const end = event.target.value;
		props.setFilters({ ...props.filters, endTime: end });
	}

  return (
		<div class="dropdown">
  		<button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    		Time
  		</button>
			<ul class="dropdown-menu">
				<li>
					<label class="form-check-label"> Start: </label>
					<input class="form-control" type="time" id="start" onChange={handleStartChange} />
				</li>
				<li>
					<label class="form-check-label"> End: </label>
					<input class="form-control" type="time" id="end" onChange={handleEndChange} />
				</li>
			</ul>
		</div>
	)
}

export default TimeFilter;