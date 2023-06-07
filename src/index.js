import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Event from './Event';
import 'bootstrap/dist/css/bootstrap.css'
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

