import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import coreStyles from '../../styles/core.scss';
import css from '../../styles/sass/style.scss';
// import css from './cart.scss';
import cartActions from './cart-actions.js';
import CartItem from '../cart-item/cart-item.js';
import { getTotalItemCount, getTotalItemPrice, numberToPrice } from '../../scripts/common/util.js';
import _ from 'lodash';

@styleable(css)
class Cart extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    cartActions: React.PropTypes.func,
    callBack: React.PropTypes.func,
    cartReducer: React.PropTypes.object,
    cart: React.PropTypes.object,
    addItems: React.PropTypes.func,
    removeItems: React.PropTypes.func,
    removeAllItems: React.PropTypes.func,
    checkOut: React.PropTypes.bool,
    navigate: React.PropTypes.func,
    submit: React.PropTypes.func
	};

  constructor() {
    super();
    this.checkOutSubmit = this.checkOutSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({submit: false});
  }

  checkOutSubmit() {
    this.setState({submit: true});
    this.props.navigate();
  }



  render() {
    const count = getTotalItemCount(this.props.cart);
    return (
      <section id={css.cart} className={'jq-cart'} style={{ zIndex: '9' }}>
      	<div
          className={`${css.overlay} overlay ${css.animate} animate`}
          style={{ zIndex: '9999' }}
          onClick={() => this.props.callBack()}
          >
        </div>
      	<div className={`${css['cart-inner']} animate jq-cart-inner`}>
          <div className={`${css['cart-header']} jq-cart-header`}>
            <span
              className={`${css['icon-close']} icon-close`}
              onClick={() => this.props.callBack()}
            ></span>
            <span className={css.title}>Your cart</span>
            { count > 1 ?
                <span className={css.count}> {count} Items Added</span>
                :
                <span className={css.count}> {count} Item Added</span>
            }
          </div>
          <div className={`${css['cart-product-list']} jq-cart-product-list`}>
            {this.props.cart != null &&
              this.props.cart.map((item, ind) => (
                <CartItem
                  item={item}
                  addItems={this.props.addItems}
                  removeItems={this.props.removeItems}
                  removeAllItems={this.props.removeAllItems}
                />
              ))
            }
            {_.isEmpty(this.props.cart) && (
            <div className={css['empty-cart-placeholder']}>
              <span className={css.icon}><img src='./ico/font-icon/empty-bag.png' /></span>
              <h5 className={css.title}>Looks like your cart is empty</h5>
              <p>If you want more products to be added<br />when you want to order next time</p>
              <a href='#_' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']} jq-add-products`} onClick={() => this.props.callBack()}>Add Products</a>
            </div>
            )}
          </div>
          <div className={`${css['cart-footer']} jq-cart-footer`}>
          	<div className={css.total}>
          		<div className={css.delivery}>
          			<span className={css.text}>Delivery fee</span>
          			<span className={`${css.price} ${css.green}`}><span className={css.strikethrough}>AED 10.00</span> FREE</span>
          		</div>
          		<div className={css['sub-total']}>
          			<span className={css.count}>Cart subtotal ({count})</span>
          			<span className={`${css.price} ${css['price-total']}`}>AED {numberToPrice(getTotalItemPrice(this.props.cart))}</span>
          		</div>
          	</div>
            { this.props.checkOut &&
              <div className={css.proceed}>
              {!_.isEmpty(this.props.cart) ? (
            		  <a href='#_' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']} ga-proceed-to-checkout`} onClick={() => this.checkOutSubmit()}>
                    {!this.state.submit ? (
                      <span>Proceed to Checkout</span>
                    ) : (
                      <div className={css['btn-loader']}></div>
                    )}
                  </a>
              ) : (
                  <a className={`${css.btn} ${css['btn-green']} ${css['btn-xl']} ${css['btn-xl']} ${css['btn-disabled']}`}>Proceed to Checkout</a>
              )}
              </div>
            }
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
	return {
    cartReducer: state.cartReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    cartActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
