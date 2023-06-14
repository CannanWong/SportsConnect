import SportsFilter from "./SportsFilter";
import TimeFilter from "./TimeFilter";
import DistanceFilter from "./DistanceFilter";
import DateFilter from "./DateFilter";

function Filters(props) {
	return (
		<div class="btn-group" role="group">
  			<SportsFilter filters={props.filters} setFilters={props.setFilters} sports={props.sports} />
				<DistanceFilter searchLocation={props.searchLocation} filters={props.filters} setFilters={props.setFilters} />
				<DateFilter filters={props.filters} setFilters={props.setFilters} />
				<TimeFilter filters={props.filters} setFilters={props.setFilters} />
		</div>
	)
}

export default Filters;