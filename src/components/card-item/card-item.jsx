import React from 'react';

import './card-item.styles.scss';

const CardItem = ({ title, imageUrl, size }) => (
    <div className={`${size} card-item`}>
        <div
        className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default CardItem;