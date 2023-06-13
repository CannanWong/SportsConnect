import SportsFilter from "./SportsFilter";
import TimeFilter from "./TimeFilter";
import DistanceFilter from "./DistanceFilter";
import DateFilter from "./DateFilter";

function Filters(props) {
	// Get all sports from events list and put them in a set to remove duplicates and no null values
	const sports = new Set(props.events.map(event => event[0].sport).filter(sport => sport != null));
	return (
		<div class="btn-group" role="group">
  			<SportsFilter sports={sports} />
				<DistanceFilter />
				<DateFilter />
				<TimeFilter />
		</div>
	)
}

export default Filters;