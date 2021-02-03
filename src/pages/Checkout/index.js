import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormCheckout from './_formCheckout';

import ProgressLine from '../../components/ProgressLine';
import { formatPrice } from '../../util/format';

import { FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import {
  Container,
  Content,
  ProductTable,
  Total,
  ResultSuccess,
} from './styles';

export default function Checkout() {
  const success = useSelector((state) => state.cart.success);
  const products = useSelector((state) =>
    state.cart.cartItem.map((p) => ({
      ...p,
      subTotal: formatPrice(p.amount * p.price),
    }))
  );
  const detailsCheckout = useSelector((state) => state.cart.detailsCheckout);
  const totalPrice = formatPrice(detailsCheckout.totalRaw);
  console.log(detailsCheckout);

  const profile = useSelector((state) => state.user.profile);

  return (
    <>
      {success ? (
        <>
          <ProgressLine progress1 progress2 progress3 progress4 />
          <ResultSuccess>
            <div>
              <FaCheckCircle size={65} color={'#00a000'} />
              <strong>Compra realizada com sucesso!</strong>
            </div>
            <FaArrowDown size={35} />
            <Link to="/oderviews">Ver meus pedidos</Link>
          </ResultSuccess>
        </>
      ) : (
        <>
          <ProgressLine progress1 progress2 progress3 />
          <Container>
            <Content>
              <section>
                <h3>Informações do Pedido:</h3>
                <ProductTable>
                  <thead>
                    <tr>
                      <th />
                      <th>PRODUTO</th>
                      <th>QTD</th>
                      <th>SUBTOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={(product.image && product.image.url) || ''}
                            alt=""
                          />
                        </td>
                        <td>
                          <strong>{product.name}</strong>
                          <small>{product.description}</small>
                          <span>{product.formattedPrice}</span>
                        </td>
                        <td>
                          <span>{product.amount}</span>
                        </td>
                        <td>
                          <strong>{product.subTotal}</strong>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </ProductTable>
                <footer>
                  <Total>
                    <span>TOTAL</span>
                    <strong>{totalPrice}</strong>
                    <div>
                      <strong>Parcelas:</strong>
                      <span>{detailsCheckout.installments}</span>
                    </div>
                  </Total>
                </footer>

                <hr />

                <h3>Informações do Usuário:</h3>
                <div>
                  <div>
                    <strong>Nome:</strong>
                    <span>{profile.name}</span>
                  </div>
                  <div>
                    <strong>E-mail:</strong>
                    <span>{profile.email}</span>
                  </div>
                  <div>
                    <strong>Telefone:</strong>
                    <span>{profile.phone}</span>
                  </div>
                  <div>
                    <strong>Rua:</strong>
                    <span>{profile.street}</span>
                  </div>
                  <div>
                    <strong>Nº da casa:</strong>
                    <span>{profile.street_number}</span>
                  </div>
                  <div>
                    <strong>Bairro:</strong>
                    <span>{profile.neighborhood}</span>
                  </div>
                  <div>
                    <strong>Cidade:</strong>
                    <span>{profile.city}</span>
                  </div>
                  <div>
                    <strong>Estado:</strong>
                    <span>{profile.state}</span>
                  </div>
                </div>
              </section>
              <section>
                <h3>Informações do Cartão</h3>
                <FormCheckout
                  products={products}
                  installments={detailsCheckout.installments}
                  totalRaw={detailsCheckout.totalRaw}
                />
              </section>
            </Content>
          </Container>
        </>
      )}
    </>
  );
}
