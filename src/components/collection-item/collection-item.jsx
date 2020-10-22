import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/button';
import { addItem } from '../../redux/actions/cart/addItem';
// after importing addItem from cart.actions and connect 
// we know we need to add the mapDispatchToProps
// because we need to dispatch this addItem action.
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    //destructure these properties but destructure them off the item. 
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
        //button onclick function will fire the addItem calling 
        //the method and passing item in.
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
//mapDispatchToProps will be a function that gets dispatch and whenever there is addItem function
//it will get an item in as the property and then we'll dispatch it to the store with our
//addItem actioncreator passing the item in and it will go through our redux flow. 
//dispatch function calls the addItem action creator.

export default connect(null, mapDispatchToProps)(CollectionItem);

