import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container text-center">
			<div className="row">
				<div className="col"> </div>
				<div className="col-6"> 
          <h2>EVENTS</h2>
          <EventsList />
        </div>
        <div className="col"> </div>
      </div>
      <div className="row">
        <div className="col"> </div>
				<div className="col-6"> 
					<h2>ADD NEW EVENT</h2>
          <NewEventForm />
        </div>
				<div className="col"> </div>
			</div>
    </div>
  );
}
 
export default App;
