import React from 'react';
import Collection from '../../components/collection/collection.jsx';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/selectors/shop.selectors.js';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import { fetchAllCollections } from '../../redux/actions/shop/fetchAllCollections.js' 
import EditForm from '../../components/edit-form/edit-form.jsx'
//import { selectItems } from '../../redux/selectors/item.selectors.js';
// this one is just a function that returns an object
//class container component
class ShopPage extends React.Component {
  //initializes
  constructor() {
  //allows class component to access methods/functionality from React.Component  
    super()
  }
  //lifecycle method( Mounting Phase)- first time on the DOM
  componentDidMount() {
      this.props.boundfetchAllCollections()
      }

   handleEdit = (event) => {
    this.setState(
      {
      id: this.props.items.id,
      name: this.props.items.name,
      imgUrl: this.props.items.imgUrl,
      price: this.props.items.price,
      category_id: this.props.items.category_id
     }
    )
   }
        // (this.props.boundfetchAllCollections) we get from
        // connect as the 2nd argument.
        // bound with dispatch and it's only way we can make it to the reducer. 
render() {
  // When called, it should examine this.props and this.state
  //console.log(this.props)
  //const {collections} = this.state
  //destructure the collections after the render and before the return.
       return (
          <div className='shop-page'>
              <EditForm/>
            {this.props.collections.map(({ id, ...otherCollectionProps }) => (
            <Collection key={id} {...otherCollectionProps} handleEdit={this.handleEdit} /> 
                ))
           }
          </div>
        )  
      }
    }

    const mapStateToProps = createStructuredSelector({
        collections: selectCollections
    });
  //return all of the collections from the shop.
  //it is up to us to determine what we need for 

  //this component to compose an object that will be merged to props.
    const mapDispatchToProps = (dispatch) => {
      return {
        boundfetchAllCollections: (items) => dispatch(fetchAllCollections(items))
      }
    };

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
// the parentheses around the ShopPage component invokes the function that it returns. 
//First argument is a function that receives state from connect as an argument.
//The function returns an object that is merged to this component's props.
//Second argument passes in the dispatch function.
//connect returns a HOC.
// That returned function will pass any information we need from the 
//Redux store's state or a wrapped action creator to our component as props.

//constructor(props) {
    //    super(props);

     //   this.state = {
      //      collections: []
     //   };
   // }

    //getCollections() {
     //   return fetch('/api/v1/categories')
     //   .then(response => response.json())
      //  .then(
        //    data => {
    //        this.setState({
     //       collections: data
     //   });
    //})}

    //componentDidMount() {
     //   this.getCollections()
    //}


  //  render() {
   //     const {collections} = this.state;
    //    return (<div className='shop-page'>
     //       {
      //          collections.map(({ id, ...otherCollectionProps }) => (
        //            <Collection key={id} {...otherCollectionProps} /> 
//                ))
 //           }
  //      </div>);
   // }
//}
//const mapStateToProps = (state) => {
 //   return {
  //      state
//    }
//}

//export default ShopPage;