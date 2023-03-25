import React from 'react';
import Card from '../components/UI/Card';

const FeaturedEvents = (props) => {
	const events = [
	{
		id: 'e1',
		name: 'Christmas',
		description: 'Lets celebrate Christmas togather',
		date: '25/12/23',
		featured: true
	},
	{
		id: 'e2',
		name: 'Eid-ul-Fitar',
		description: 'Lets celebrate Eid togather',
		date: '01/12/23',
		featured: true
	},
	{
		id: 'e3',
		name: 'Holi',
		description: 'Lets celebrate Holi togather',
		date: '14/12/23',
		featured: false
	},
	];
	const filteredData = events.filter((item) => item.featured === true);
	return (
		<div className="events">
			<div className="container">
				<h1>Featured Events</h1>
				<ul className="events-holder">
					{filteredData.map((event) => (
						<Card>
							<li key={event.id}>
								<h1>{event.name}</h1>
								<div>{event.description}</div>
								<div>{event.date}</div>
	              <button className='feature-btn'>
	                Featured
	              </button>
							</li>
						</Card>
					))}
				</ul>
			</div>
		</div>
	)
}

export default FeaturedEvents