import React from 'react';
import styleable from 'react-styleable';
// import coreStyles from '../../styles/core.scss';
// import css from './nav-header.scss';
import css from '../../styles/sass/style.scss';
import moment from 'moment';
import { getTotalItemCount, getTotalItemPrice, numberToPrice } from '../../scripts/common/util.js';

const NavHeader = ({ callBack, cart, user, searchItems, searchStatus, loginStatus, checkOutStatus, page }) => (
  <section>
    <header id={css.header} className={`jq-header`}>
    	<div className={`container`}>
    		<a href='./' id={css.logo}>Grocery</a>
        { searchStatus && (
          <div className={`${css['search-box']} col-xs-5`}>
    			<div className={`${css['input-form']} input-form`}>
    				<input
              type='search'
              className={`${css['form-control']} form-control`}
              placeholder='Search products...'
              onKeyUp={(e) => searchItems(e.target.value)}
            />
    				<button type='submit' className={css['search-btn']}></button>
    			</div>
  		    </div>
        )}

        { loginStatus && (
    		    <div className={`${css['cart-wrap']} ${css['logged-in']}`}>
    			<a className={`${css.login} ${css.btn} ${css['btn-sm']}`}>
    				<span className={css['login-txt']}>Login</span>
    			</a>

    			<div className={css['user-name']}>Hi, <span>{user}</span></div>

          { checkOutStatus ? (
      			<div
              id={css['cart-checkout']}
              className={`${css.cart} cart-checkout`}
              //onClick={() => callBack()}
            >

      				<span className={css.icon}>
      					<span className={`${css['icon-cart']} icon-cart`}></span>
  							{getTotalItemCount(cart) > 0 &&
  									<i className={css.count}>
  										{getTotalItemCount(cart)}
  									</i>
  							}
      				</span>
      				<span className={css.total}><span className={css.price}>AED {numberToPrice(getTotalItemPrice(cart))}</span></span>
      				<div className={css.checkout}>Checkout</div>
      			</div>
          ) : (
            <div
              id={css['cart-checkout']}
              className={`${css.cart} cart-checkout`}
            >

              <span className={css.icon}>
                <span className={`${css['icon-cart']} icon-cart`}></span>
                {getTotalItemCount(cart) > 0 &&
                    <i className={css.count}>
                      {getTotalItemCount(cart)}
                    </i>
                }
              </span>
              <span className={css.total}><span className={css.price}>AED {numberToPrice(getTotalItemPrice(cart))}</span></span>
            </div>
          )}
		    </div>
        )}
    	</div>
    </header>
  </section>

);

NavHeader.propTypes = {
  callBack: React.PropTypes.func,
  cart: React.PropTypes.object,
  user: React.PropTypes.array,
  searchItems: React.PropTypes.func,
  searchStatus: React.PropTypes.bool,
  loginStatus: React.PropTypes.bool,
  checkOutStatus: React.PropTypes.bool,
  page: React.PropTypes.string
};

export default styleable(css)(NavHeader);
