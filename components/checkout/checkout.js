import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from '../../styles/sass/style.scss';
import { acquireEmbeddedJson, addRemoveCartItems } from './checkout-actions.js';
import CartItem from '../cart-item/cart-item.js';
import NavHeader from '../nav-header/nav-header.js';
import FooterInner from '../footer/footer-inner/footer-inner.js';
import _ from 'lodash';
import { getTotalItemCount, getTotalItemPrice, numberToPrice } from '../../scripts/common/util.js';
import DeliveryBanner from './delivery-banner/delivery-banner.js';
import moment from 'moment';
let validate = false;

@styleable(css)
class Checkout extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    checkoutReducer: React.PropTypes.object,
    requestInviteReducer: React.PropTypes.object,
    acquireEmbeddedJson: React.PropTypes.func,
    fetchPost: React.PropTypes.func
	};

  constructor() {
    super();
    this.addItems = this.addItems.bind(this);
    this.removeItems = this.removeItems.bind(this);
    this.removeAllItems = this.removeAllItems.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMobileChange = this.handleMobileChange.bind(this);
    this.checkoutCart = this.checkoutCart.bind(this);
    this.manageCart = this.manageCart.bind(this);
    this.validateAll = this.validateAll.bind(this);
  }

  componentWillMount() {
    this.props.acquireEmbeddedJson(this.props.options);
    this.setState({address: ''});
    this.setState({mobile: ''});
    this.setState({name: ''});
  }

  validateAll(){
    validate= false;
    if(this.state.address === ''){
      validate = true;
    }
    if(this.state.mobile === ''){
      validate = true;
    }
    if(this.state.name === ''){
      validate = true;
    }
    return validate;
  }

  checkoutCart(){
    window.location.href = '/checkout-success';
  }

  manageCart() {
    localStorage.data = JSON.stringify(this.props.checkoutReducer);
  }

  handleAddressChange(e){
    this.setState({address: e.target.value});
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleMobileChange(e){
    this.setState({mobile: e.target.value});
  }

  addItems(itemID) {
    this.props.addRemoveCartItems(itemID, this.props.options, 'add');
    this.manageCart();
  }

  removeItems(itemID){
    this.props.addRemoveCartItems(itemID, this.props.options, 'remove');
    this.manageCart();
  }

  removeAllItems(itemID){
    this.props.addRemoveCartItems(itemID, this.props.options, 'removeAll');
    this.manageCart();
  }

  render() {
    if (_.isEmpty(this.props.checkoutReducer)) {
      return (
        <div className={`loader-wrap`}>
          <div className={`spinner`}></div>
          <span>Grocery</span>
        </div>
      )
    }
    const count = getTotalItemCount(this.props.checkoutReducer.cart);
    return (
      <div>
        <NavHeader
          callBack={''}
          cart={this.props.checkoutReducer.cart}
          user={this.props.checkoutReducer.user.details.name}
          searchItems={this.searchItems}
          searchStatus={false}
          loginStatus
          checkOutStatus={false}
          page = {'checkout'}
        />

        <section id={css.page}>
  			<div className={`page-content container`}>
  				<div className={`row`}>
  					<div className={css['checkout-page']}>
              <div className={`${css['your-cart']} col-md-5`}>

                <div className={css['header']}>
                  <h1>Your Cart</h1>
                  <span className={css['item-count']}>
                    { count > 1 ?
                        <span className={css.count}> {count} Items Added</span>
                        :
                        <span className={css.count}> {count} Item Added</span>
                    }
                  </span>
                  <p>Once you place the order, one of our agents will call and confirm with you.</p>
                </div>

                <div className={css['item-list']}>
                {this.props.checkoutReducer.cart != null && !_.isEmpty(this.props.checkoutReducer.cart) ? (
                  this.props.checkoutReducer.cart.map((item, ind) => (
                    <CartItem
                      item={item}
                      addItems={this.addItems}
                      removeItems={this.removeItems}
                      removeAllItems={this.removeAllItems}
                    />
                  ))
                ):(
                  <div className={`${css['empty-cart-placeholder']} ${css['left-panel']}`}>
                    <span className={css.icon}><img src='./ico/font-icon/empty-bag.png' /></span>
                    <h5 className={css.title}>Looks like your cart is empty</h5>
                    <p>If you want more products to be added<br />when you want to order next time</p>
                    <a href='./' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']} jq-add-products`}>Add Products</a>
                  </div>
                )
                }
                </div>
                <div className={css['cart-footer']}>
  								<div className={css.total}>
  									<div className={css.delivery}>
  										<span className={css.text}>Delivery fee</span>
  										<span className={`${css.price} ${css.green}`}><span className={css.strikethrough}>AED 10</span> FREE</span>
  									</div>
  									<div className={css['sub-total']}>
  										<span className={css.count}>Cart subtotal ({getTotalItemCount(this.props.checkoutReducer.cart)})</span>
  										<span className={`${css.price} ${css['price-total']}`}>AED {numberToPrice(getTotalItemPrice(this.props.checkoutReducer.cart))}</span>
  									</div>
  								</div>
  							</div>
              </div>
              <div className={`${css.billing} col-md-7`}>
                <DeliveryBanner
                  callBack= {this.props.clickDeliveryLocations}
                />

                <div className={css['delivery-details']}>
                  <span className={css.heading}>
                    Delivery And Personal Details
                  </span>
                  <form action='' className={css.form}>
                    <div className={`row`}>
                      <div className={'col col-md-12'}>
                        <label className={css['input-field']}>
                          <span>Delivery Address *</span>
                          <input type='text' className={`${css['form-control']} form-control ${this.state.address === '' && css['validation-error'] }`} value={this.state.address} onChange={this.handleAddressChange} />
                          {this.state.address === '' && (
                            <span className={css['validation-error']}>Empty Field</span>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className={`row`}>
                      <div className={'col col-md-6'}>
                        <label className={css['input-field']}>
                          <span>Name *</span>
                          <input type='text' className={`${css['form-control']} form-control ${this.state.name === '' && css['validation-error'] }`} value={this.state.name} onChange={this.handleNameChange} />
                          {this.state.name === '' && (
                              <span className={css['validation-error']}>Empty Field</span>
                          )}
                        </label>
                      </div>
                      <div className={'col col-md-6'}>
                        <label className={css['input-field']}>
                          <span>Mobile *</span>
                          <input type='text'className={`${css['form-control']} form-control ${this.state.mobile === '' && css['validation-error'] }`} value={this.state.mobile} onChange={this.handleMobileChange}/>
                          {this.state.mobile === '' && (
                              <span className={css['validation-error']}>Empty Field</span>
                          )}
                        </label>
                      </div>
                    </div>
                    <div className={`row`}>
                      <div className={`col col-md-12 ${css['payment-methods']}`}>
                        <h5>Payment methods</h5>
                        <div className={`${css.alert} `} ><span className={css.icon}><img src='./ico/font-icon/wallet.png' /></span> You are requested to pay at the point of delivery either by cash or credit / debit card.</div>

                        <h5>Terms and Conditions</h5>
                        <div className={css.switch}>
                          <span className={css.label}>I agree to Grocery's' <a href="#_">Terms of Use.</a></span>
                          {/*<input className={`${css['cmn-toggle']} ${css['cmn-toggle-round']}`} type='checkbox' />*/}
                          <label></label>
                        </div>
                      </div>
                    </div>
                    <div className={`row ${['delivery-footer']}`}>
                      <div className={`col col-xs-12 col-sm-6 col-md-6`}>
                      {!_.isEmpty(this.props.checkoutReducer.cart) ? (
                          <div className={`btn ${css.btn} ${css['btn-green']} ${css['btn-xl']} ga-place-order`} onClick={() => this.checkoutCart()}>Place your Order</div>
                          ) : (
                            <div className={`btn ${css.btn} ${css['btn-green']} ${css['btn-xl']} ${css['btn-disabled']}`}>Place your Order</div>
                      )}
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
        </section>
        <FooterInner />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
    checkoutReducer: state.checkoutReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    acquireEmbeddedJson,
    addRemoveCartItems
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
