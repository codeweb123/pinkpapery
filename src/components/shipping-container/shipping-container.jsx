import React from 'react';
import ShippingList from '../../components/shipping-list/shipping-list';

export default class ShippingContainer extends React.Component {
    constructor() {
        super()

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        fetch('https://learn-co-curriculum.github.io/books-json-example-api/books.json')//'api/v1/categories')
            .then(res => res.json())
            .then(bookData => this.setState({ books: bookData.books })) 
    }

    render() {
        return <ShippingList books={this.state.books} />
    }
}

