import React from 'react';

import { Container, Content } from './styles';

import ProductList from '../../components/ProductList';

export default function Home() {
  return (
    <Container>
      <Content>
        <ProductList />
      </Content>
    </Container>
  );
}
