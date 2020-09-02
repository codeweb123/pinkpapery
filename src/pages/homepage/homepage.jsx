import React from 'react';

import CardContainer from '../../components/card-container/card-container.jsx'; 

import './homepage.styles.scss';

//functional component, not storing state, no lifecycle methods
const HomePage = () => (
    <div className='homepage'>
        <CardContainer />
    </div>    
);

export default HomePage;