import React from 'react';
import './homepage.styles.scss';

//functional component, not storing state, no lifecycle methods
const HomePage = () => (
    <div className='homepage'>
        <div className='card-container'>
            <div className='card-item'>
                <div className='content'>
                    <h1 className='title'>Custom Stationery</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='card-item'>
                <div className='content'>
                    <h1 className='title'>Calendars</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='card-item'>
                <div className='content'>
                    <h1 className='title'>Custom Planners</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='card-item'>
                <div className='content'>
                    <h1 className='title'>Paper Bar</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='card-item'>
                <div className='content'>
                    <h1 className='title'>Specialty Cards</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    </div>    
);

export default HomePage;