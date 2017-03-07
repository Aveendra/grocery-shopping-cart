import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from '../../styles/sass/style.scss';
import _ from 'lodash';
import {
  acquireEmbeddedJson,
  addRemoveCartItems,
  searchCartItems
 } from './home-cart-actions.js';
import { clickCart } from '../cart/cart-actions.js';
import Products from './products/products.js';
import NavHeader from '../nav-header/nav-header.js';
import Welcome from './welcome/welcome.js';
import Footer from '../footer/footer.js';
import Cart from '../cart/cart.js';

@styleable(css)
class HomeCart extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    options: React.PropTypes.object,
    clickCart: React.PropTypes.func,
    clickInvite: React.PropTypes.func,
    acquireEmbeddedJson: React.PropTypes.func,
    homeCartReducer: React.PropTypes.object,
    cartReducer: React.PropTypes.object
	};

  constructor() {
    super();
    this.addItems = this.addItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.storeCart = this.storeCart.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  storeCart() {
    localStorage.data = JSON.stringify(this.props.homeCartReducer);
  }

  navigate() {
    this.storeCart();
    let url = '/checkout';
    setTimeout(() => {
      window.location.href = url;
    }, 4000);

  }

  componentWillMount() {
    this.props.acquireEmbeddedJson(this.props.options);
  }

  addItems(itemID) {
    this.props.addRemoveCartItems(itemID, this.props.options, 'add');
  }

  removeItems(itemID){
    this.props.addRemoveCartItems(itemID, this.props.options, 'remove');
  }

  removeAllItems(itemID){
    this.props.addRemoveCartItems(itemID, this.props.options, 'removeAll');
  }

  render() {
    if (_.isEmpty(this.props.homeCartReducer)) {
      return (
        <div className={`loader-wrap`}>
          <div className={`spinner`}></div>
          <span>Grocery</span>
        </div>
      )
    }
    return (
      <div>
        <NavHeader
          callBack={this.props.clickCart}
          cart={this.props.homeCartReducer.cart}
          user={this.props.homeCartReducer.user.details.name}
          searchItems={this.searchItems}
          searchStatus={false}
          loginStatus
          checkOutStatus
          page = {'home'}
        />

        <Welcome />
        <Products
          items={this.props.homeCartReducer.items}
          addItems={this.addItems}
          removeItems={this.removeItems}
        />
        <Footer />
        <Cart
          cart={this.props.homeCartReducer.cart}
          cartStatus={this.props.cartReducer}
          callBack={this.props.clickCart}
          addItems={this.addItems}
          removeItems={this.removeItems}
          removeAllItems={this.removeAllItems}
          navigate = {this.navigate}
          checkOut
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    homeCartReducer: state.homeCartReducer,
    cartReducer: state.cartReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    acquireEmbeddedJson,
    clickCart,
    addRemoveCartItems,
    searchCartItems
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeCart);
