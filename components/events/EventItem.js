import React from 'react';
import Link from 'next/link';
import Card from '../UI/Card';

const EventItem = (props) => {

	const exploreLink = `/events/${props.event.id}`;
	const date = new Date(props.event.date);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options);

	return (
		<Card>
			<li key={props.event.id}>
				<h1>{props.event.title}</h1>
				<h3>{props.event.description}</h3>
				<div>{props.event.location}</div>
				<div>{formattedDate}</div>
        <Link href={exploreLink} className='feature-btn'>
          Explore Link
        </Link>
			</li>
		</Card>
	)
}

export default EventItem