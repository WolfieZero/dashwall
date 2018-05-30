import React from 'react';

const imageStyle = imageUrl => ({
    backgroundImage: 'url(' + imageUrl + ')',
});

const Image = ({ src }) => (
    <div className="image" style={imageStyle(src)} />
);

export default Image;
