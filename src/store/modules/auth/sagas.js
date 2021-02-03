import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { signInSuccess, signFailure } from './actions';

import api from '../../../services/api';
import history from '../../../services/history';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    toast.success('Autenticado com sucesso!');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha ao autenticar-se, verifique seus dados!');
  }
}

export function* signUp({ payload }) {
  try {
    const { name,
      email,
      password,
      cpf,
      rg,
      phone,
      birthday,
      zipcode,
      street,
      streetNumber,
      neighborhood,
      city,
      state, } = payload.data;

    yield call(api.post, '/users', {
      name,
      email,
      password,
      cpf,
      rg,
      phone,
      birthday,
      zipcode,
      street,
      street_number: streetNumber,
      neighborhood,
      city,
      state,
    });
    toast.success('Cadastro realizado com sucesso!');
    history.push('/');
  } catch (err) {
    yield put(signFailure());
    toast.error('Falha ao cadastrar-se, verifique seus dados!');
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
