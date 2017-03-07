import React from 'react';
import ReactDom from 'react-dom';
// import { handleDefaults } from '../helpers/utils';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import CheckoutSuccessCombinedReducers from './checkout-success-combined-reducers';
import CheckoutSuccess from './checkout-success';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class HwrldCheckoutSuccess{
  constructor(element, dynamicOptions) {
	  const defaults = {};
		this.element = element;
		this.options = dynamicOptions;
		this.renderElm();
  }

	renderElm() {
    const store = createStoreWithMiddleware(
      CheckoutSuccessCombinedReducers,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    );
	  ReactDom.render(
      <Provider store={store}>
				<CheckoutSuccess options={this.options} />
			</Provider>
			,
			document.querySelector(this.element));
	  }
}

window.HwrldCheckoutSuccess = HwrldCheckoutSuccess;
