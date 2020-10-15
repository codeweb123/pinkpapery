import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../redux/actions/shop/editItems';
import './edit-form.styles.scss';

class EditForm extends Component {
    constructor(){
        super()
//form for edit, start blank
    this.state = {
                id: '',
                name: '',
                imageUrl: '',
                price: '',
                category_id: ''
            }
    }
    
    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    update = e => {
        e.preventDefault()
        this.props.boundeditItem({id: parseInt(this.state.id), name: this.state.name, imageUrl: this.state.imageUrl, price: parseInt(this.state.price), category_id: parseInt(this.state.category_id)})
            }
    
    render() {
        return (
            <>
            <div className="edit-form">
            <h2>Edit Form</h2>
            <form onSubmit={this.update}>
                <label>ID</label>
                &nbsp;&nbsp;
                <input 
                    type='integer' 
                    value={this.state.id} 
                    onChange={this.handleChange} 
                    name='id'
                />  
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Name</label>
                &nbsp;&nbsp;
                <input 
                    type='text' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    name='name'
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Image</label>
                &nbsp;&nbsp;
                <input 
                    type='string' 
                    value={this.state.imageUrl} 
                    onChange={this.handleChange} 
                    name='imageUrl'
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Price</label>
                &nbsp;&nbsp;
                <input 
                    type='integer' 
                    value={this.state.price} 
                    onChange={this.handleChange} 
                    name='price'
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <label>Category ID</label>
                &nbsp;&nbsp;
                <input 
                    type='integer' 
                    value={this.state.category_id} 
                    onChange={this.handleChange} 
                    name='category_id'
                />
                <br>
                </br>
                <br>
                </br>
                <center><input type='submit' value='Edit Item' /></center>
            </form>
            </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { collections: state.collections }
}

const mapDispatchToProps = (dispatch) => {
    return {
      boundeditItem: (item) => dispatch(editItem(item))
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(EditForm);
