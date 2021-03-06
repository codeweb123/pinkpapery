import React from 'react';
import CollectionItem from '../collection-item/collection-item.jsx';
import './collection.styles.scss';

const Collection = ({ title, items }) => (
    <div className='collection'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items
            .filter((item, idx) => idx < 4)
            .map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
);

export default Collection;

//.map with the whole item and render the <Collection/>
//.map requires an id
