import { all, call, select, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';

export function* addToCart({ payload }) {
  const { id } = payload;
  const productExists = yield select((state) =>
    state.cart.cartItem.find((product) => product.id === id)
  );

  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart)]);
