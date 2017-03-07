import { ACTION } from 'checkout-success-actions';

export default function (state = null, action) {
  switch (action.type) {
    case ACTION:
      return action.payload;
		default:
	}

  return state;
}