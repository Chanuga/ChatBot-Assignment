import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function TopNavigation() {
	return (
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' fixed='top'>
			<Container>
				<Navbar.Brand href='#home'>Visit Sri Lanka</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						{/* <Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link> */}
					</Nav>
					<Nav>
						<Nav.Link
							href='https://www.srilanka.travel/what_world_has_to_say'
							target='new'
						>
							WHAT THE WORLD HAS TO SAY
						</Nav.Link>
						<Nav.Link
							href='https://www.srilanka.travel/index.php?route=event/upcoming&dev=asd'
							target='new'
						>
							UPCOMING EVENTS
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default TopNavigation;
