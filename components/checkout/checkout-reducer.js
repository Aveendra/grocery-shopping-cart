import { EMBEDDED_JSON_AQUIRED, CART_MODIFIED } from './checkout-actions';

export default function (state = null, action) {
  switch (action.type) {
    case EMBEDDED_JSON_AQUIRED:
      return action.json;
    case CART_MODIFIED: {
      const cloned = _.clone(action.payload.JSON)
      let index = -1;
      cloned.items.forEach(function(item, ind) {
        if(item.id ===  action.payload.itemID){
          index = ind;
        }
      });
      let count = cloned.items[index].cart_count;
      if(action.payload.event === 'add' && cloned.items[index].cart_count < 10000){
        cloned.items[index].cart_count = count + 1;
      } else if(action.payload.event === 'remove'){
        cloned.items[index].cart_count = count - 1;
      } else if(action.payload.event === 'removeAll'){
        cloned.items[index].cart_count = 0
      }

      const cartItems = cloned.items.filter(item => item.cart_count > 0);
      cloned.cart = cartItems;
      console.log(cloned);

      return cloned;
    }
		default:
	}

  return state;
}
