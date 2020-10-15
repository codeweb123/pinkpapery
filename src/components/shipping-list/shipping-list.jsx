import React from 'react';
import Ship from '../../components/ship/ship';

const ShippingList = ({ books }) => (
    <div className="ship-list">
        { books.map(book => <Ship title={book.title} img_url={book.img_url} />) }
    </div>
    )

export default ShippingList;