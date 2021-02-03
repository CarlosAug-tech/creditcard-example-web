import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

import Cart from './_cart';
import SignIn from './_signIn';
import ProfileOptions from './_profileOptions';
// import BtnCart from '../BtnCart';

import avatarNotImage from '../../assets/Image/avatarNoImage.png'

import { FaShopify, FaSun, FaMoon } from 'react-icons/fa';
import { Container, Content, Menu, MenuProfile } from './styles';

export default function Header() {
  const [isVisibleSignIn, setIsVisibleSignIn] = useState(false);
  const [isVisibleProfile, setIsVisibleProfile] = useState(false);

  const isLogged = useSelector((state) => state.user.profile);

  function handleIsVisibleSignIn() {
    setIsVisibleSignIn(!isVisibleSignIn);
  }

  function handleIsVisibleProfile() {
    setIsVisibleProfile(!isVisibleProfile);
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <FaShopify size={35} />
            EcoFake2
          </Link>
        </nav>
        {isLogged ? (
          <MenuProfile>
            <li>
              <div>
                <FaSun size={20} color={'#fff'} />
                <Switch
                  onChange={() => {}}
                  checked={false}
                  checkedIcon={false}
                  uncheckedIcon={false}
                  height={12}
                  width={40}
                  handleDiameter={16}
                  offColor={'#eee'}
                  onColor={'#999'}
                />
                <FaMoon size={18} color={'#fff'} />
              </div>
            </li>
            <li>
              <Cart />
            </li>
            <li>
              <img
                src={avatarNotImage}
                alt=""
                onClick={handleIsVisibleProfile}
              />
              <ProfileOptions isVisibleProfile={isVisibleProfile} />
            </li>
          </MenuProfile>
        ) : (
          <Menu>
            <li>
              <Link to="/register">Cadastrar-se</Link>
            </li>
            <li>
              <Link to="#" onClick={() => handleIsVisibleSignIn()}>
                Login
              </Link>
              <SignIn isVisibleSignIn={isVisibleSignIn} />
            </li>
          </Menu>
        )}
      </Content>
    </Container>
  );
}
