import React from 'react'
import Shippingbox from '../../assets/shippingbox.jpg';
import './shipping.styles.scss';
import ShippingContainer from '../../components/shipping-container/shipping-container'

const ShippingPage = () => (
    <div className='shipping-container'>
    <div>
        <div>
            <h1>Shipping</h1>
                <h3>Standard Shipping: Standard shipping is typically the default checkout setting. Your item(s) are expected to be delivered within 3–5 business days after the items have been shipped and picked up by the delivery carrier.
                2-Day Shipping: Depending on the item origin and shipping destination, 2-day shipping may be available in select areas. Your item(s) are expected to be delivered within 2 business days after the items have been shipped and picked up by the delivery carrier.
                Shipping: Your item(s) are expected to be delivered within 1 business day after the items have been shipped and picked up by the delivery carrier. </h3>
        </div>
        <div>
            <h1>
                We also carry books!
            </h1>
        </div>
        <div>
            <ShippingContainer />
        </div>
    </div>
        <div className='shippingimg'>
            <img  className='shippingimg' src= {Shippingbox} alt='box'/>
        </div>
    </div>
);

export default ShippingPage;
