import React from 'react';

import CardItem from '../card-item/card-item.jsx';

import './card-container.styles.scss';

class CardContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'Custom Stationary',
                imageUrl: '',
                id: 1
            },
            {
                title: 'Calendars',
                imageUrl: '',
                id: 2

            },
            {
                title: 'Custom Planners',
                imageUrl: '',
                id: 3

            },
            {
                title: 'Paper Bar',
                imageUrl: '',
                id: 4

            },
            {
                title: 'Specialty Cards',
                imageUrl: '',
                id: 5

            }]
        }
    }

    render() {
        return (
            <div className='card-container'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                        <CardItem key={id} title={title} />
                    ))}
            </div>
        )
    }
}

export default CardContainer;
