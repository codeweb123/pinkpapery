import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editItem } from '../../redux/actions/shop/editItems';
import './edit-form.styles.scss';

class EditForm extends Component {
//form for edit, start blank
    state = {
        id: '',
        name: '',
        imgUrl: '',
        price: ''
     }
//I need to find the item from the collection array
  //  componentDidMount() {
   //     this.findItem()
  //  }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

   // findItem = () => {
    //    const { collections, id} = this.props
     //   console.log(collections)
     //   const collection = collections.find(collection => collection.id === id)
      //  this.setState({
       //     id: collection.id,
        //    name: collection.name,
         //   imageUrl: collection.imageUrl,
          //  price: collection.price
     //   })
   // }

    update = e => {
        e.preventDefault()
        this.props.editItem(this.state)
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
                <br />
                <br />
                <center><input type='submit' value='Edit Item' />  
                </center>
            </form>
            </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return { collections: state.collections }
}

export default connect(mapStateToProps, { editItem })(EditForm);
