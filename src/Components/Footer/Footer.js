import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

function Footer() {
	return (
		// <Container
		// 	fluid
		// 	style={{
		// 		backgroundColor: '#555555',
		// 	}}
		// >
		// 	<Row>
		// 		<Col>
		// 			<div>
		// 				<img
		// 					src='https://www.srilanka.travel/catalog/view/theme/default/template/common/icons/footer-logo.png'
		// 					alt='logo'
		// 					width='200'
		// 					height='100'
		// 				/>
		// 			</div>
		// 			<div>
		// 				<p class='link-topic mb-0'>Tourism Hotline</p>
		// 				<a class='link-phone' href='tel:1912'>
		// 					1912
		// 				</a>
		// 			</div>
		// 			<div>
		// 				<p class='link-topic mb-0'>Ambulance Service</p>
		// 				<a class='link-phone' href='tel:1990'>
		// 					1990
		// 				</a>
		// 			</div>
		// 		</Col>

		// 		<Col>
		// 			<h5>Quick Links</h5>
		// 		</Col>
		// 		<Col>3 of 3</Col>
		// 	</Row>
		// </Container>
		<Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>Visit Sri Lanka</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						{/* <Nav.Link href='#features'>Features</Nav.Link>
						<Nav.Link href='#pricing'>Pricing</Nav.Link> */}
					</Nav>
					<Nav>
						{/* <Nav.Link href='#deets'>More deets</Nav.Link>
						<Nav.Link href='#deets'>More deets</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Footer;
