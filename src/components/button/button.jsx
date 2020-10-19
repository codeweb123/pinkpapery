import React from 'react';
import './button.styles.scss';

const Button = ({ children, ...otherProps }) => (
  <button className='button' {...otherProps}>
    {children}
  </button>
);
//
export default Button;

// Example {children}
// Whenever this component is invoked {props.children} will 
// also be displayed and this is just a reference to what is 
// between the opening and closing tags of the component.

// App.js
// render () {
//   return (
//     <div className='container'>
//       <Picture key={picture.id} src={picture.src}>
//           //what is placed here is passed as props.children  
//       </Picture>
//     </div>
//   )
// }
