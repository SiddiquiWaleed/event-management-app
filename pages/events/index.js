import React, { useState } from "react";
import Card from '../../components/UI/Card';

const Events = () => {

	const [isFeatured, setIsFeatured] = useState();

	const events = [
	{
		id: 'e1',
		name: 'Christmas',
		description: 'Lets celebrate Christmas togather',
		date: '25/12/23',
		featured: false
	},
	{
		id: 'e2',
		name: 'Eid-ul-Fitar',
		description: 'Lets celebrate Eid togather',
		date: '01/12/23',
		featured: false
	},
	{
		id: 'e3',
		name: 'Holi',
		description: 'Lets celebrate Holi togather',
		date: '14/12/23',
		featured: false
	},
	];

	const showEventHandler = (props) => {
		
	}
	return (
		<div className="events">
			<div className="container">
				<h1>Events Happening Soon</h1>
				<ul className="events-holder">
					{events.map((event) => (
						<Card onClick={showEventHandler}>
							<li key={event.id}>
								<h1>{event.name}</h1>
								<div>{event.description}</div>
								<div>{event.date}</div>
	              <button className='feature-btn'>
	                { event.featured ? 'Featured' : 'Add to Feature'}
	              </button>
							</li>
						</Card>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Events