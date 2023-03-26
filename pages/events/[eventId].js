import React from 'react';
import { useRouter } from 'next/router';
import {getEventById} from '../../dummy_data';
import EventDetail from '../../components/events/EventDetail';

const EventDetailPage = () => {

	const router = useRouter();
	const id = router.query.eventId;
	const event = getEventById(id);
	if(!event) {
		return <h1>Event not found</h1>
	} else {
		return (
			<div>
				<EventDetail event={event} />
			</div>
		)
	}
}

export default EventDetailPage;