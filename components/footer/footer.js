import React from 'react';
import styleable from 'react-styleable';
// import coreStyles from '../../styles/core.scss';
// import css from './footer.scss';
import css from '../../styles/sass/style.scss';
import FooterCopyrights from './footer-copyrights/footer-copyrights';

const Footer = () => (
    <footer>
    	<div className={css['request-items']}>
    		<div className={css.top}></div>
    		<div className={css.bottom}>
    			<div className={`${css.col} col-xs-12 col-sm-8 col-md-5`}>
                    <h2 className={css.heading}>Can’t find your grocery items?</h2>
                    <p>No problem. Tell us what is missing and we will add the products you want.</p>
    				<a href='mailto:aveendramanoj777@gmail.com?Subject=Request%20products' target='_top' className={`${css.btn} ${css['btn-xl']} ${css['btn-green']} ga-request-products`}>Request an item</a>
                    <br />
                    <span><i>OR</i> Email to <a href="mailto:aveendramanoj777@gmail.com?Subject=Request%20products">aveendramanoj777@gmail.com</a></span>
    			</div>
    		</div>
    	</div>
      <FooterCopyrights />
    </footer>
);

Footer.propTypes = {};

export default styleable(css)(Footer);
