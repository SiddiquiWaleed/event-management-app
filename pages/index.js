import React from 'react';
import {getFeaturedEvents} from '../dummy_data';
import EventItem from '../components/events/EventItem';

const HomePage = (props) => {

	const filteredData = getFeaturedEvents();
	return (
		<div className="events">
			<div className="container">
				<h1>Featured Events</h1>
				<ul className="events-holder">
					{filteredData.map((event) => (
						<EventItem key={event.id} event={event} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default HomePage