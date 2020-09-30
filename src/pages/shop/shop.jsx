import React from 'react';
import Collection from '../../components/collection/collection.jsx';
import { createStructuredSelector } from 'reselect';
import {selectCollections} from '../../redux/selectors/shop.selectors.js';
import { connect } from 'react-redux';
import { render } from '@testing-library/react';
import { fetchAllCollections } from '../../redux/actions/shop/fetchAllCollections.js' 
// this one is just a function that returns an object

class ShopPage extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
         collections: []
      }
  }

    componentDidMount() {
      this.props.boundfetchAllCollections()
      }
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
        // dispatch(fetchAllCollections(collectionObj.items))
        // bound with dispatch and it's only way we can make it to the reducer.
        // the one we get from props 
        // (this.props.boundfetchAllCollections) we get from
        // connect as the 2nd argument.
render() {
  console.log(this.props)
     const {collections} = this.state
       return (
          <div className='shop-page'>
           {
            this.props.collections.map(({ id, ...otherCollectionProps }) => (
            <Collection key={id} {...otherCollectionProps} /> 
                ))
           }
          </div>
        )  
      }
    }
  
    //function mapStateToProps(state) {
     // return {
      //  collections: state.collections
     // }
    //}
    const mapStateToProps = createStructuredSelector({
        collections: selectCollections
    }
  );
  //it is up to us to determine what we need for 
  //this component to compose an object that will be merged to props.
    const mapDispatchToProps = (dispatch) => {
      return {
        boundfetchAllCollections: (items) => dispatch(fetchAllCollections(items))
    }
  };

// the parentheses around the component's name invokes the function that it returns. 
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
//connect takes 2 arguments
//First argument is a function that receives state from connect as an argument.
//the function returns an object that is merged to this component's props.

// use connect to access the Redux store (includes State and Dispatch)
// connect returns a function that recieves components as arguments.
//connect returns a HOC.
// that returned function will pass any information we need from the 
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