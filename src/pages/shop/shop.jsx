import React from 'react';
import Collection from '../../components/collection/collection.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: []
        };
    }

    getCollections() {
        return fetch('/api/v1/categories')
        .then(response => response.json())
        .then(
            data => {
            this.setState({
            collections: data
        });
    })}

    componentDidMount() {
        this.getCollections()
    }


    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <Collection key={id} {...otherCollectionProps} /> 
                ))
            }
        </div>);
    }
}


export default ShopPage;