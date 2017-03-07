import React, { Component } from 'react';
import styleable from 'react-styleable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import css from '../../styles/sass/style.scss';
import checkoutSuccessActions from './checkout-success-actions.js';
import NavHeader from '../nav-header/nav-header.js';
import FooterInner from '../footer/footer-inner/footer-inner.js';

@styleable(css)
class CheckoutSuccess extends Component {
  static propTypes= {
    css: React.PropTypes.object,
    checkoutSuccessActions: React.PropTypes.func,
    checkoutSuccessReducer: React.PropTypes.object
	};

  render() {
    return (
      <div>
        <NavHeader
          callBack={''}
          cart={''}
          user={''}
          searchItems={''}
          searchStatus={false}
          loginStatus={false}
          checkOutStatus={false}
          page = {'checkout-success'}
        />
        <section id={css.page}>
    			<div className={`${css['page-content']} container`}>
    				<div className={css['order-placed']}>
    					<div className={css['alert-box']}>
    						<span className={`${css.icon} ${css.animate} ${css.fadeInUp}`}><img src='./ico/font-icon/success.png' /></span>
    						<h1 className={`${css.animate} ${css.fadeInUp}`}>Your order is successfully placed.</h1>
    						<p className={`${css.animate} ${css.fadeInUp}`}>One of our agents will call you shortly for confirmation.</p>
    						<span className={`${css.note} ${css.animate} ${css.fadeInUp}`}>Thank you for using Grocery!</span>
    					</div>


    					<div className={css['after-blocks']}>
    						<div className={`col col-xs-4 ${css.col}`}>
    							<div className={`${css.content} content`}>
    								<span className={css.heading}>Welcome to the Grocery</span>
    								<span className={css.icon}><img src='./ico/font-icon/hand-shake.png' /></span>
    								<p className={css.description}>We’ve created an account and <br />email has been sent to you.</p>
    								<a href='#_' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']}`}>Browse products</a>
    							</div>
    						</div>
    						<div className={`col col-xs-4 ${css.col}`}>
    							<div className={`${css.content} content`}>
    								<span className={css.heading}>Need more products?</span>
    								<span className={css.icon}><img src='./ico/font-icon/request-items.png' /></span>
    								<p className={css.description}>Let us know the products <br />you want to buy. We will add them.</p>
    								<a href='mailto:aveendramanoj777@gmail.com.com?Subject=Request%20products' target='_top' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']}`}>Request products</a>
    							</div>
    						</div>
    						<div className={`col col-xs-4 ${css.col}`}>
    							<div className={`${css.content} content`}>
    								<span className={css.heading}>Share with friends</span>
    								<span className={css.icon}><img src='./ico/font-icon/request-invite.png' /></span>
    								<p className={css.description}>Loved it? Share it with friends and <br />earn credits when they buy.</p>
    								<a href='mailto:aveendramanoj777@gmail.com?Subject=Request%20products' target='_top' className={`${css.btn} ${css['btn-green']} ${css['btn-xl']}`}>Invite Friends</a>
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
    checkoutSuccessReducer: state.checkoutSuccessReducer
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    checkoutSuccessActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSuccess);
