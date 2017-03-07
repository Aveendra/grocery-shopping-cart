import React from 'react';
import ReactDom from 'react-dom';
// import { handleDefaults } from '../helpers/utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import CheckoutCombinedReducers from './checkout-combined-reducers';
import Checkout from './checkout';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class HwrldCheckout{
  constructor(element, dynamicOptions) {
	  const defaults = {};
		this.element = element;
		this.options = dynamicOptions;
		this.renderElm();
  }

	renderElm() {
    const store = createStoreWithMiddleware(
      CheckoutCombinedReducers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
	  ReactDom.render(
      <Provider store={store}>
				<Checkout options={this.options} />
			</Provider>
			,
			document.querySelector(this.element));
	  }
}

window.HwrldCheckout = HwrldCheckout;
