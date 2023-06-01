import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";

function App() {
  return (
    <div>
      <h1>EVENTS</h1>
      <EventsList />
      <h1>ADD NEW EVENT</h1>
      <NewEventForm />
    </div>
  );
}
 
export default App;
