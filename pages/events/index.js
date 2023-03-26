import React from "react";
import Card from '../../components/UI/Card';
import {getAllEvents} from '../../dummy_data';
import EventItem from '../../components/events/EventItem';


const Events = () => {

	const AllEvents = getAllEvents();

	return (
		<div className="events">
			<div className="container">
				<h1>Events Happening Soon</h1>
				<ul className="events-holder">
					{AllEvents.map((event) => (
						<EventItem key={event.id} event={event} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default Events