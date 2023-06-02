import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="container text-center">
      <hr/>
      <br/>
			<div className="row">
				<div className="col"> </div>
				<div className="col-6"> 
          <h2>EVENTS!!!</h2>
          <br/>
          <EventsList />
        </div>
        <div className="col"> </div>
      </div>
      <hr/>
      <br/>
      <div className="row">
        <div className="col"> </div>
				<div className="col-6"> 
					<h2>ADD NEW EVENT</h2>
          <NewEventForm />
        </div>
				<div className="col"> </div>
			</div>
      <br/>
      <hr/>
      <br/>
    </div>
  );
}
 
export default App;
