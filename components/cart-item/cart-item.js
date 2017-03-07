import React from 'react';
import styleable from 'react-styleable';
//import css from './cart-item.scss';
import css from '../../styles/sass/style.scss';
import { numberToPrice } from '../../scripts/common/util.js';

const CartItem = ({ item, addItems, removeItems, removeAllItems }) => (
  <div className={css['cart-itm']}>
		<div className={css.cont}>

			<div className={css['product-data']}>
				<span className={css.img}>
					<img src={item.image} alt={item.name} />
				</span>
				<div className={css.data}>
					<span className={css.description}>
						<p className={css['description-wrapper']}>{item.name} - {item.description}</p>
						<span className={css.size}>{item.unit_value}</span>
					</span>
				</div>
			</div>

			<div className={css.qty}>
				<span
          className={css.addmore}
          onClick={() => addItems(item.id)}
        >
          <a title={'Add item'} className={'fa fa-plus'}></a>
        </span>
				<span className={css.count}><i>{item.cart_count}</i></span>
				<span
          className={css.reduce}
          onClick={() => removeItems(item.id)}
        >
          <a title={'Remove Item'} className={'fa fa-minus'}></a>
        </span>
			</div>

			<div className={css.pricing}>
					<span className={css.ptotal}>AED .{numberToPrice(item.price*item.cart_count)}</span>
			</div>

		</div>
		<div
      className={css['close-btn']}
      onClick={() => removeAllItems(item.id)}
    >
      <i className={`${css['icon-close']} icon-close`}></i>
    </div>
	</div>
);

CartItem.propTypes = {
  item: React.PropTypes.object,
  addItems: React.PropTypes.func,
  removeItems: React.PropTypes.func
};

export default styleable(css)(CartItem);
