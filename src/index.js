import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Event from './Event';
import 'bootstrap/dist/css/bootstrap.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  </React.StrictMode>, document.getElementById('root')
);

