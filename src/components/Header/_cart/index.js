import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
import { Container } from './styles';

export default function Cart() {
  const amountCart = useSelector((state) => state.cart.cartItem.length);

  console.log(amountCart);

  return (
    <Container>
      <Link to="/cart">
        <FaShoppingCart size={25} />
        {amountCart > 0 && (
          <div>
            <span>{amountCart}</span>
          </div>
        )}
      </Link>
    </Container>
  );
}
