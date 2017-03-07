import React from 'react';
import styleable from 'react-styleable';
// import coreStyles from '../../../styles/core.scss';
// import css from './products.scss';
import css from '../../../styles/sass/style.scss';
import Product from '../product/product.js';

const Products = ({ items, addItems, removeItems }) => (
  <section id={css.products}>
    <div className='container'>
      <div id={css['product-list']}>
        {items.map((item, ind) => (
          <Product
            item={item}
            addItems={addItems}
            removeItems={removeItems}
          />
        ))}
      </div>
    </div>
  </section>
);

Products.propTypes = {
  items: React.PropTypes.object,
  addItems: React.PropTypes.func,
  removeItems: React.PropTypes.func
};

export default styleable(css)(Products);
