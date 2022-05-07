import React from 'react';
import { Container } from 'react-bootstrap';
import PhotoAlbum from 'react-photo-album';

function Album() {
	const photos = [
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/elephant-new.png',
			width: 800,
			height: 600,
		},
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/scenic.png',
			width: 1600,
			height: 900,
		},
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/prestine.png',
			width: 800,
			height: 600,
		},
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/ayurweda.png',
			width: 800,
			height: 600,
		},
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/spices.png',
			width: 800,
			height: 600,
		},
		{
			src: 'https://www.srilanka.travel/image/travel-new-images/heritage-statue.png',
			width: 1600,
			height: 900,
		},
	];
	return (
		<Container style={{ marginTop: '20px' }}>
			<h1 style={{ letterSpacing: '4px', fontFamily: 'Comfortaa' }}>Album</h1>
			<PhotoAlbum layout='masonry' photos={photos} />
		</Container>
	);
}

export default Album;
