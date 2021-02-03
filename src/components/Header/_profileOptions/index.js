import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../../store/modules/auth/actions';

import { FaUserEdit, FaSignOutAlt, FaCreditCard } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { Container } from './styles';

export default function ProfileOptions({ isVisibleProfile }) {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container isVisibleProfile={isVisibleProfile}>
      <Link to="/profile">
        Editar Perfil
        <FaUserEdit size={15} />
      </Link>
      <Link to="/oderview">
        Meus Pedidos
        <FaCreditCard size={15} />
      </Link>
      {profile.email === 'admin@creditfake.com' && (
        <Link to="/dashboard">
          Dashboard
          <MdDashboard size={15} />
        </Link>
      )}
      <Link to="#" onClick={handleLogout}>
        Logout
        <FaSignOutAlt size={15} />
      </Link>
    </Container>
  );
}
