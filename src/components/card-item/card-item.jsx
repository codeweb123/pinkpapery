import React from 'react';
import { withRouter } from 'react-router-dom';

import './card-item.styles.scss';

const CardItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div 
    className={`${size} card-item`} 
    onClick={() => history.push(`${match.url}${linkUrl}`)} //match prop will link into the linkURL.
    >
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

export default withRouter(CardItem);
// withRouter component from 'react-router-dom' is a HOC function 
//that takes a component and returns a modified component. 
//export default withRouter(CardItem) syntax gives us access to
//Router the history, location, match, props. 
//history access only from HomePage componet where i was originally rendered. 