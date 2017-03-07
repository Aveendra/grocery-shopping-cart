import { CART_CLICKED } from './cart-actions';

export default function (state = 'inactive', action) {
	switch (action.type) {
      case CART_CLICKED: {
				let payload;
				if (state === 'active') {
					payload = 'inactive';
				}	else {
					payload = 'active';
				}
				return payload;
			}

			default:
    }
	return state;
}
