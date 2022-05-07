import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';

function Welcome() {
	return (
		<Container style={{ marginTop: '20px' }}>
			<h1 style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}>
				Welcome to Sri Lanka
			</h1>
			<h5 style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}>
				See what's waiting for you on your next island getaway.
			</h5>
			<h5 style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}>
				Savour the unique experiences this island treasure has to offer.
			</h5>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					flexWrap: 'wrap',
				}}
			>
				<Card style={{ width: '18rem', margin: '20px' }}>
					<Card.Img
						variant='top'
						src='https://www.srilanka.travel/image/travel-new-images/Hello-again.jpg'
					/>
					<Card.Body>
						<Card.Title
							style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}
						>
							All you need to know when travelling to Sri Lanka
						</Card.Title>
						<Button
							variant='primary'
							href='https://www.srilanka.travel/helloagain/'
							target='new'
						>
							See More
						</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem', margin: '20px' }}>
					<Card.Img
						variant='top'
						src='https://www.srilanka.travel/image/travel-new-images/Safe-Secure-service-providers.jpg'
					/>
					<Card.Body>
						<Card.Title
							style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}
						>
							All you need to know when travelling to Sri Lanka
						</Card.Title>
						<Button
							variant='primary'
							href='https://srilanka.travel/safe-and-secure'
							target='new'
						>
							See More
						</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem', margin: '20px' }}>
					<Card.Img
						variant='top'
						src='https://www.srilanka.travel/image/banner_2022.png'
					/>
					<Card.Body>
						<Card.Title
							style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}
						>
							All you need to know when travelling to Sri Lanka
						</Card.Title>
						<Button
							variant='primary'
							href='https://www.srilanka.travel/international-endorsements'
							target='new'
						>
							See More
						</Button>
					</Card.Body>
				</Card>
			</div>
		</Container>
	);
}

export default Welcome;
