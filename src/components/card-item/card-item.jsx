import React from 'react';

import './card-item.styles.scss';

const CardItem = ({ title }) => (
    <div className='card-item'>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default CardItem;