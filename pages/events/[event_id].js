import React from 'react';
import { useRouter } from 'next/router';

const Event = (props) => {
	const router = useRouter();
	return (
		<div>
			<h1>{props.title}</h1>
			<h1>{props.description}</h1>
			<h1>{props.date}</h1>
		</div>
	)
}

export default Event;