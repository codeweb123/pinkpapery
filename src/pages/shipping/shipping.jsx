import React from 'react'
import Shippingbox from '../../assets/shippingbox.jpg';
import './shipping.styles.scss';

const ShippingPage = () => (
    <div className='shipping-container'>
        <div className='shippingimg'>
            <img src= {Shippingbox} alt='box'/>
        </div>
        <div>
            <h3>
Standard Shipping: Standard shipping is typically the default checkout setting. Your item(s) are expected to be delivered within 3–5 business days after the items have been shipped and picked up by the delivery carrier.
Your order may ship in multiple packages so we’re able to deliver your order faster. 
Some ship to home orders are eligible to have multiple packages consolidated. This may change your delivery dates. Packages that qualify will be eligible for a $1 off discount off of merchandise subtotal. Merchandise subtotal does not include Gift Cards, eGiftCards, MobileGiftCards, gift wrap, tax or shipping and handling charges. Discount will be displayed and applied at checkout. May not be applied to previous orders. Ineligible carts will not be shown an option to consolidate and will not receive the discount.
2-Day Shipping: Depending on the item origin and shipping destination, 2-day shipping may be available in select areas. Your item(s) are expected to be delivered within 2 business days after the items have been shipped and picked up by the delivery carrier. For eligible items, spend $35 or more, or place your order using your RedCard and receive free 2-day shipping. 
Express Shipping: Your item(s) are expected to be delivered within 1 business day after the items have been shipped and picked up by the delivery carrier. 
            </h3>
        </div>
    </div>
);

export default ShippingPage;
