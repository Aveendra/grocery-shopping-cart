import commaIt from 'comma-it';

/* to get the total count of selected items */
export function getTotalItemCount(cart) {
  let count = 0;
  if(cart !== null){
    cart.forEach(function(item, ind) {
      count += item.cart_count;
    });
  }
	return count;
}

/* to get the total price of selected items */
export function getTotalItemPrice(cart) {
  let price = 0;
  if(cart !== null){
    cart.forEach(function(item, ind) {
      price += item.price*item.cart_count;
    });
  }
	return price;
}

/* to convert the numbers into price format */
export function numberToPrice(num) {
	let price = String(num);
	if (!/\./ig.test(String(num))) {
		price = `${String(num)}.00`;
	} else if (String(num).split('.')[1].length === 1) {
		price = `${String(num)}0`;
	}
	return commaIt(price, { addPrecision: true, thousandSeperator: ',', decimalSeperator: '.' });
}