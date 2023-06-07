import 'bootstrap/dist/css/bootstrap.css';
import { useLocation } from 'react-router-dom';

function Event() {
  const key = useLocation().state
  return (
    <div className="container text-center">
      <p>{key.eventName}</p>
    </div>
  );
}
 
export default Event;
