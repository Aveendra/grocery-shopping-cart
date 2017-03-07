import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import HomeCartCombinedReducers from './home-cart-combined-reducers';
import HomeCart from './home-cart';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class HwrldHomeCart{
  constructor(element, dynamicOptions) {
	  const defaults = {};
		this.element = element;
		this.options = dynamicOptions;
		this.renderElm();
  }

	renderElm() {
    const store = createStoreWithMiddleware(
      HomeCartCombinedReducers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
	  ReactDom.render(
      <Provider store={store}>
				<HomeCart options={this.options} />
			</Provider>
			,
			document.querySelector(this.element));
	  }
}

window.HwrldHomeCart = HwrldHomeCart;
