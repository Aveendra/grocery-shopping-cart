import React from 'react';
import styleable from 'react-styleable';
//import coreStyles from '../../../styles/core.scss';
// import css from './product.scss';
import css from '../../../styles/sass/style.scss';
import { numberToPrice } from '../../../scripts/common/util.js';

const Product = ({ item, addItems, removeItems }) => (
    <div className={`${css['product-itm']} ${item.cart_count > 0 && css['has-added']}`}>
      {item.cart_count > 0 &&
          <div className={css['cart-count']}><span>{item.cart_count}</span></div>
      }
      <div className={css['product-img']}><img src={item.image} alt={item.name} /></div>
      <div className={css['add-to-cart']}>
        <button
          className={`${css.add} ${css.btn} ${css['btn-green']} ga-add-product`}
          onClick={() => addItems(item.id)}
          title={`Add item`}
        >
          <i>+</i> &nbsp; Add <span>to Cart</span>
        </button>
        <button
          className={`${css.remove} ${css.btn} ${css['btn-default']}`}
          onClick={() => removeItems(item.id)}
          title={`Remove item`}
        >
          <span className={`fa fa-minus`}></span>
        </button>
      </div>
      <div className={css['product-data']}>
        <div className={css['small-description']}>
          <p>{item.name} - {item.description}</p>
        </div>
        <span className={css.size}>{item.unit_value}</span>
        <span className={css.price}>AED {numberToPrice(item.price)}</span>
      </div>
    </div>
);

Product.propTypes = {
  item: React.PropTypes.object,
  addItems: React.PropTypes.func,
  removeItems: React.PropTypes.func
};

export default styleable(css)(Product);
