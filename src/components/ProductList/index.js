import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import ProductItem from './_productItem';
import { formatPrice } from '../../util/format';

import { Container } from './styles';

export default function ProductList() {
  const [products, setProdcuts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');
      const data = response.data.map((product) => ({
        ...product,
        formattedPrice: formatPrice(product.price),
      }));
      setProdcuts(data);
    }
    loadProducts();
  }, []);

  return (
    <Container>
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </Container>
  );
}
