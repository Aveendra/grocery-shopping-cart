import React from 'react';
import styleable from 'react-styleable';
import css from '../../../styles/sass/style.scss';

const DeliveryBanner = ({ callBack }) => (
  <div className={css['delivery-banner']}>
		<span className={css.icon}><img src='./img/delivery-banner-icon.png' /></span>
		<div className={css.data}>
			<h3>Free Delivery. Delivers only around Dubai</h3>
			<p>Currently we deliver only within Dubai <br />and suburbs during the same day of the order.</p>
			<a href='#_'>Delivery Locations</a>
		</div>
		<div className={css.actions}>
			<a href='#_'
      >
        Delivery Locations
      </a>
		</div>
	</div>
);

DeliveryBanner.propTypes = {};

export default styleable(css)(DeliveryBanner);
