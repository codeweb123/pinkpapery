import React from 'react';

import CardItem from '../card-item/card-item.jsx';

import './card-container.styles.scss';

class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Custom Stationary',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61ZVmVzFloL._AC_SL1049_.jpg',
                id: 1,
                linkUrl:''
            },
            {
                title: 'Calendars',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61tZdKlHsZL._AC_SL1000_.jpg',
                id: 2,
                linkUrl:''

            },
            {
                title: 'Custom Planners',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81-0pNcnghL._AC_SL1500_.jpg',
                id: 3,
                linkUrl:''

            },
            {
                title: 'Paper Bar',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51bGtO9HCgL._AC_SL1470_.jpg',
                size: 'large',
                id: 4,
                linkUrl:''

            },
            {
                title: 'Specialty Cards',
                imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81CxYNVzDLL._AC_SL1500_.jpg',
                size: 'large',
                id: 5,
                linkUrl:''

            }]
        }
    }

    render() {
        return (
            <div className='card-container'>
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <CardItem key={id} {...otherSectionProps} />
                    ))}
            </div>
        )
    }
}

export default CardContainer;
