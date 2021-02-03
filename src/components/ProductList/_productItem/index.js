import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCartRequest } from '../../../store/modules/cart/actions';

import { Container, ProductDescription } from './styles';

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  function handleAddToCart(id) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <img
        src={
          (product.image && product.image.url) ||
          'https://ec.europa.eu/consumers/consumers_safety/safety_products/rapex/alerts//assets/images/NoPicAvailable.png'
        }
        alt=""
      />
      <ProductDescription>
        <strong>{product.name}</strong>
        <p>{product.description}</p>
        <span>{product.formattedPrice}</span>
      </ProductDescription>
      <button onClick={() => handleAddToCart(product.id)}>
        Adicionar ao carrinho
      </button>
    </Container>
  );
}
