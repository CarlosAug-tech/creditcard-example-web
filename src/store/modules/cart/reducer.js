import { produce } from 'immer';

const INITIAL_STATE = {
  cartItem: [],
  detailsCheckout: {},
  success: false,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cart/ADD_TO_CART_SUCCESS': {
        draft.cartItem.push(action.payload.product);
        draft.detailsCheckout = {};
        draft.success = false;
        break;
      }
      case '@cart/ADD_TO_CART_CHECKOUT': {
        draft.detailsCheckout = action.payload.data;
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCCESS': {
        const productIndex = draft.cartItem.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.cartItem[productIndex].amount = Number(action.payload.amount);
        }

        break;
      }
      case '@cart/REMOVE_TO_CART': {
        const productIndex = draft.cartItem.findIndex(
          (product) => product.id === action.payload.id
        );

        if (productIndex >= 0) {
          draft.cartItem.splice(productIndex, 1);
        }
        break;
      }
      case '@cart/BUY_SUCCESS': {
        draft.cartItem = [];
        draft.detailsCheckout = {};
        draft.success = true;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
