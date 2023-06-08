import EventsList from "./components/EventsList";
import NewEventForm from "./components/NewEventForm";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./App.module.css";
import { Tab } from '@headlessui/react'
import Navbar from "./components/NavBar";
import React from "react";
import Dropdown from "./components/Dropdown";

function App() {
  
  return (
    <>
    <React.Fragment>
      <Navbar />
    </React.Fragment>
    <hr />
    <br />
    <div className="App">
        <Dropdown placeHolder="Select Sport..." />
    </div>
    </>
    // <div className="container text-center">
    //   <hr/>
    //   <br/>
		// 	<div className="row">
		// 		<div className="col"> </div>
		// 		<div className="col-6"> 
    //       <h2>EVENTS!!!</h2>
    //       <br/>
    //       <EventsList />
    //     </div>
    //     <div className="col"> </div>
    //   </div>
    //   <hr/>
    //   <br/>
    //   <div className="row">
    //     <div className="col"> </div>
		// 		<div className="col-6"> 
		// 			<h2>ADD NEW EVENT</h2>
    //       <NewEventForm />
    //     </div>
		// 		<div className="col"> </div>
		// 	</div>
    //   <br/>
    //   <hr/>
    //   <br/>
    // </div>
  );
}
 
export default App;
