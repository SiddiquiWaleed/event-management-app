import React from 'react';
import Card from '../UI/Card';

const EventDetail = ( {event} ) => {
	return (
		<Card>
			<h1>{event.title}</h1>
			<p>{event.description}</p>
			<p>{event.location}</p>
			<p>{event.date}</p>
		</Card>
	)
}

export default EventDetail