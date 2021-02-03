import React from 'react';

import { Container } from './styles';
import {
  FaShoppingBasket,
  FaAddressBook,
  FaCreditCard,
  FaCheckCircle,
} from 'react-icons/fa';

export default function ProgressLine(props) {
  return (
    <Container>
      <div className={props.progress1 ? 'active' : ''}>
        <FaShoppingBasket size={30} />
      </div>
      <hr className={props.progress1 ? 'active' : ''} />
      <div className={props.progress2 ? 'active' : ''}>
        <FaAddressBook size={30} />
      </div>
      <hr className={props.progress2 ? 'active' : ''} />
      <div className={props.progress3 ? 'active' : ''}>
        <FaCreditCard size={30} />
      </div>
      <hr className={props.progress3 ? 'active' : ''} />
      <div className={props.progress4 ? 'active' : ''}>
        <FaCheckCircle size={30} />
      </div>
    </Container>
  );
}
