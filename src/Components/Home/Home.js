import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import NuwaraEliya from '../../Resources/Images/NuwaraEliya.jpeg';
import Galle from '../../Resources/Images/Galle.jpeg';
import Sigiriya from '../../Resources/Images/Sigiriya.jpeg';
import Anuradhapuraya from '../../Resources/Images/Anuradhapuraya.jpeg';

function Home() {
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img className='d-block w-100' src={NuwaraEliya} alt='First slide' />
					<Carousel.Caption>
						<h3>Nuwara Eliya, Sri Lanka</h3>
						{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img className='d-block w-100' src={Galle} alt='Second slide' />
					<Carousel.Caption>
						<h3>Galle, Sri Lanka</h3>
						{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className='d-block w-100' src={Sigiriya} alt='Third slide' />
					<Carousel.Caption>
						<h3>Sigiriya, Sri Lanka</h3>
						{/* <p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p> */}
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className='d-block w-100'
						src={Anuradhapuraya}
						alt='Third slide'
					/>
					<Carousel.Caption>
						<h3>Anuradhapura, Sri Lanka</h3>
						{/* <p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p> */}
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Home;
