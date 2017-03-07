import React from 'react';
import styleable from 'react-styleable';
import css from '../../../styles/sass/style.scss';

const FooterCopyrights = () => (
  <div className={css.copyrights}>
  	<div className={`container ${css.container}`}>
  		<a href='' className={css['footer-logo']}>Grocery</a>
  		<span className={css['copyright-txt']}>
        Copyright &copy; 2017 - Grocery
        <a href='#_'>Terms of use</a>
        </span>
  		<ul className={`${css['social-links']} hide`}>
  			<li><a href=''><i className={`fa fa-facebook`}></i></a></li>
  			<li><a href=''><i className={`fa fa-twitter`}></i></a></li>
  			<li><a href=''><i className={`fa fa-linkedin`}></i></a></li>
  		</ul>
  		<span className={css['help-desk']}>Helpdesk - <a href='tel:+971507032356'>0507032356</a></span>
  	</div>
  </div>
);

FooterCopyrights.propTypes = {};

export default styleable(css)(FooterCopyrights);
