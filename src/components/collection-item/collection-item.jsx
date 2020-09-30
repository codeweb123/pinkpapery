import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button';
import { addItem } from '../../redux/actions/cart/addItem';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    
    const { name, price, imageUrl } = item;
    
    return(
    <div className='collection-item'>
        <div 
        className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        />
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button onClick ={() => addItem(item)} inverted="true"> Add to cart</Button>
        </div>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
//dispatch function calls the addItem action creator

export default connect(null, mapDispatchToProps)(CollectionItem);

