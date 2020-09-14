import React from 'react';
import Weddinginvite from '../../assets/weddinginvite.jpg';
import './about.styles.scss';
import Handcrafted from '../../assets/handcrafted.jpg';

const AboutPage = () => (
    <div className='aboutpage'>
        <div className='aboutpic'>
            <div className='aboutus'>
                <h1>About Us</h1>
                <h3>
                At The Pink Papery, we believe that every moment presents a new opportunity to create something special. From the journal where you share your most precious memories, to the stationery that helps you celebrate life’s simple joys, we’ve thoughtfully designed each card, to be your inspiration haven.
                </h3>
            <div className='aboutimg'>
                <img className='img' src={Weddinginvite} alt='item' />
            </div>
                <h1>
                    Handcrafted and Hands-on
                </h1>
                <h3>
                    From custom rubber stamp cutting to personalizing paper lanterns, our in-store sessions let you explore your creative side. Experiment with expert crafting techniques including heat embossing, embellishing, digital cutting and letterpress, and more, all under professional guidance. We also offer private workshop sessions to host your next party, with bookings available both during and after store hours.
                </h3>
                <img className='img' src={Handcrafted} alt='item' />
            </div>
        </div> 
    </div>  
);

export default AboutPage;