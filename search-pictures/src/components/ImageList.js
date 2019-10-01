import React from 'react';

//rendering a list of images
const ImageList =(props) => {
	const images = props.images.map((image) => {
		return <img key={image.id} alt={image.description} src={image.urls.regular}></img>
	});

	return (
		<div>{images}</div>
	)
}

export default ImageList;