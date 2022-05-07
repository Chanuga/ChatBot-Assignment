import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function New() {
	return (
		<Container style={{ marginTop: '20px' }}>
			<h1 style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}>
				What's New
			</h1>

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
						src='https://www.srilanka.travel/image/travel-new-images/Wilpaththu.jpg'
					/>
					<Card.Body>
						<Card.Title
							style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}
						>
							All you need to know when travelling to Sri Lanka
						</Card.Title>
						<Button
							variant='primary'
							href='https://www.youtube.com/watch?v=4ldGML1veG4'
							target='new'
						>
							See More
						</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem', margin: '20px' }}>
					<Card.Img
						variant='top'
						src='https://www.srilanka.travel/image/travel-new-images/Esala-perahara-option.jpg'
					/>
					<Card.Body>
						<Card.Title
							style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}
						>
							Greatest Shows on Earth
						</Card.Title>
						<Button
							variant='primary'
							href='https://www.youtube.com/watch?v=TR2XC6Ai9cM'
							target='new'
						>
							See More
						</Button>
					</Card.Body>
				</Card>

				<Card style={{ width: '18rem', margin: '20px' }}>
					<Card.Img
						variant='top'
						src='https://www.srilanka.travel/image/travel-new-images/end-final.png'
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

export default New;
