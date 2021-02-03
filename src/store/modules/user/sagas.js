import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { profileUpdateSuccess } from './actions';

export function* updateProfile({ payload }) {
  const {
    name,
    email,
    cpf,
    rg,
    phone,
    birthday,
    zipcode,
    street,
    streetNumber,
    neighborhood,
    city,
    state,
    ...rest
  } = payload.data;

  const profile = Object.assign(
    {
      name,
      email,
      cpf,
      rg,
      phone,
      birthday,
      zipcode,
      street,
      streetNumber,
      neighborhood,
      city,
      state,
    },
    rest.oldPassword ? rest : {}
  );

  const response = yield call(api.put, '/users', profile);

  yield put(profileUpdateSuccess(response.data));
}

export default all([takeLatest('@user/PROFILE_UPDATE_REQUEST', updateProfile)]);
