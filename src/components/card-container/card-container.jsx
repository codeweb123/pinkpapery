import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCardContainerSections } from '../../redux/selectors/cardcontainer.selectors';
import CardItem from '../card-item/card-item.jsx';
import './card-container.styles.scss';

const CardContainer = ({ sections }) => (
    <div className='card-container'>
        {sections.map(({ id, ...otherSectionProps }) => (//ES6 syntax...otherSectionProps to spread the values of the rest of the props.
                <CardItem key={id} {...otherSectionProps} />
            ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectCardContainerSections
})

export default connect(mapStateToProps)(CardContainer);
