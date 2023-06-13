function DateFilter(props) {
	return (
		<div class="dropdown">
			<button type="button" class="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Date
			</button>
			<ul class="dropdown-menu">
				<li>
					<input class="form-control" type="date" id="date" />
				</li>
			</ul>
		</div>
	)
}
  
export default DateFilter;