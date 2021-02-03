import React from 'react';
import {Link} from 'react-router-dom'
import {FiPlusCircle} from 'react-icons/fi'

import {Container, Content} from './styles'

export default function Dashboard() {
  return(
    <Container>
      <Content>
        <Link to="/addProduct">
          <FiPlusCircle size={25} color="#fff" />
          <span>Adicionar Produto</span>
        </Link>
      </Content>
    </Container>
  )
}