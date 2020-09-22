import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.jsx';
import ShopPage from './pages/shop/shop.jsx';
import CheckoutPage from './pages/checkout/checkout';
import AboutPage from './pages/about/about';
import ShippingPage from './pages/shipping/shipping';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';

function App() {

  return (
    <div>
      <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/shipping' component={ShippingPage} />
          </Switch>
      <Footer />
    </div>
  );
}


export default App
