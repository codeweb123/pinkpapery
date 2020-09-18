import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//Stripe wants price in cents so multiply by 100

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HQPZTL89azWpJQTp2b9BlyESzXAC3diuDeVMgBUjMly5s5qQs2vllKMQKTKqT4IQnFXsAHS77hn8QBnkc72YaQB00MkcJ47dp';

  const onToken = token => {
    console.log(token);
    alert('Payment Succesful!');
  };
//allow the fields to input 
  return (
    <StripeCheckout
      label='Pay Now'
      name='The Pink Papery'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken} //on success 
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;