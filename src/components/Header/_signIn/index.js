import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import { signInRequest } from '../../../store/modules/auth/actions';

export default function SignIn({ isVisibleSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(signInRequest(email, password));
  }

  return (
    <Container isVisibleSignIn={isVisibleSignIn}>
      <Content>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder=" "
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="">E-mail</label>
          </div>
          <div>
            <input
              type="password"
              placeholder=" "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="">Senha:</label>
          </div>
          <button type="submit">Acessar</button>
          <Link to="/register">Não possui conta? Cadastra-se!</Link>
        </form>
      </Content>
    </Container>
  );
}
