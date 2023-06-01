import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div class="container text-center">
			<div class="row">
				<div class="col"> </div>
				<div class="col-6"> 
          <h2>EVENTS</h2>
          <EventsList />
        </div>
        <div class="col"> </div>
      </div>
      <div class="row">
        <div class="col"> </div>
				<div class="col-6"> 
					<h2>ADD NEW EVENT</h2>
          <NewEventForm />
        </div>
				<div class="col"> </div>
			</div>
    </div>
  );
}
 
export default App;
