import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <h1>EVENTS</h1>
      <EventsList />
      <NewEventForm />
    </div>
  );
}
 
export default App;
