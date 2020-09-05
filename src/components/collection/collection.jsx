import React from 'react';

import CollectionItem from '../collection-item/collection-item.jsx';

import './collection.styles.scss';

const Collection = ({ title, items }) => (
    <div className='collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default Collection;