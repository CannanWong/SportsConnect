import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import Event from './Event';
import NewEventForm  from './components/NewEventForm';
import 'bootstrap/dist/css/bootstrap.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import User from './User';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event" element={<Event />} />
        <Route path="/newEvent" element={<NewEventForm />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>, document.getElementById('root')
);

