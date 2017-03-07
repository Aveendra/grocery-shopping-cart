export const EMBEDDED_JSON_AQUIRED = 'EMBEDDED_JSON_AQUIRED';
export const CART_MODIFIED = 'CART_MODIFIED';

export function acquireEmbeddedJson(json) {
  console.log(json);
  return {
    type: EMBEDDED_JSON_AQUIRED,
		json
  };
}

export function addRemoveCartItems(itemID, JSON, event) {
  return {
    type: CART_MODIFIED,
    payload: {itemID, JSON, event}
  };
}
