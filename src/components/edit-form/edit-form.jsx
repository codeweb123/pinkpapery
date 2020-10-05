import React, { Component } from 'react';

class EditForm extends Component {

    state = {
        category_id: '',
        name: '',
        imageUrl: '',
        price: ''
    }


    handleChange = e => {
        const { name, value } = e.target

        this.setState({
            [name]: value
        })
    }

   
    render() {
        return (
            <>
            Edit Form
            <form onSubmit={}>

                <label>Category ID</label>
                <input 
                    type='integer' 
                    value={this.state.category_id} 
                    onChange={this.handleChange} 
                    name='category_id'
                />

                <br />
                <br />

                <label>Name</label>
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    name='name'
                />

                <br />
                <br />

                <label>Image</label>
                <input 
                    type='image' 
                    value={this.state.imageUrl} 
                    onChange={this.handleChange} 
                    name='imageUrl'
                />

                <br />
                <br />

              <label>Price</label>
                <input 
                    type='integer' 
                    value={this.state.price} 
                    onChange={this.handleChange} 
                    name='price'
                />

                <br />
                <br />

                <input type='submit' value='Edit Item' />  

            </form>

            </>
        );
    }
}

export default EditForm;