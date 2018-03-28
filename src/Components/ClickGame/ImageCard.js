import React from 'react';
import './ImageCard.css';

const ImageCard = ({image, onClick}) => (
    <div className='col m3' onClick={onClick}>
        <img className='ImageCard' src={image} alt='gaurdians' />
    </div>
);

export default ImageCard;