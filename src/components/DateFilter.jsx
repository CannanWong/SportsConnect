function DateFilter(props) {
	function handleDateChange(event) {
		const date = event.target.value;
		const formattedDate = new Date(date).toLocaleDateString('en-GB', {
			weekday: 'short', // Mon
			day: 'numeric', // 17
			month: 'short', // Jun
			year: 'numeric' // 2023
		  });
		props.setFilters({ ...props.filters, date: formattedDate });
	}
	return (
		<div class="dropdown">
			<button type="button" class="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Date
			</button>
			<ul class="dropdown-menu">
				<li>
					<input class="form-control" type="date" id="date" onChange={handleDateChange} />
				</li>
			</ul>
		</div>
	)
}
  
export default DateFilter;