import { Tab } from '@headlessui/react'
import EventsList from "./EventsList";
import EventsMap from "./EventsMap";
import { Fragment } from 'react';

function ViewToggle(props) {
	return (
		<Tab.Group>
			<div style={{ alignContent: "start", justifyContent: "start" }}>
			<Tab.List>
				<Tab as={Fragment} style={{ marginRight: "10px" }}>
          {({ selected }) => (
            <button
              className={
                selected ? 'btn btn-primary' : 'btn btn-outline-primary'
              }
            >
              List View
            </button>
          )}
        </Tab>
				<Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected ? 'btn btn-primary' : 'btn btn-outline-primary'
              }
            >
              Map View
            </button>
          )}
        </Tab>
			</Tab.List>
			</div>
			<br/>
			<Tab.Panels>
				<Tab.Panel>
					<EventsList events={props.events} />
				</Tab.Panel>
				<Tab.Panel>
					<EventsMap 
						events={props.events} 
						google={props.google}
						initialCenter={{ lat: 51.506729, lng: -0.171589 }} // Specify initial center coordinates
						/>
				</Tab.Panel>
			</Tab.Panels>
		</Tab.Group>
	)
}

export default ViewToggle;