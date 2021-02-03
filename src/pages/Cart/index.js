import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import ProgressLine from '../../components/ProgressLine';
import {
  updateAmountRequest,
  addToCartCheckout,
  removeToCart,
} from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import history from '../../services/history';

import { Container, Content, ProductTable, Total } from './styles';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

export default function Cart() {
  const [installments, setInstallments] = useState(1);

  const products = useSelector((state) =>
    state.cart.cartItem.map((product) => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );
  const totalRaw = useSelector((state) =>
    state.cart.cartItem.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  );

  const totalPrice = formatPrice(totalRaw);

  const dispatch = useDispatch();

  function incrementAmount(product) {
    dispatch(updateAmountRequest(product.id, product.amount + 1));
  }

  function decrementAmount(product) {
    dispatch(updateAmountRequest(product.id, product.amount - 1));
  }

  function handleRemoveToCart(id) {
    dispatch(removeToCart(id));
  }

  function renderInstallments() {
    return [...new Array(4)].map((item, idx) => {
      const installment = idx + 1;
      return (
        <option value={installment}>{`${installment} x ${formatPrice(
          totalRaw / installment
        )}`}</option>
      );
    });
  }

  function handleAddToCheckout() {
    const data = {
      installments,
      totalRaw,
    };

    dispatch(addToCartCheckout(data));
    history.push('/shipping');
  }

  return (
    <>
      <ProgressLine progress1 />
      <Container>
        <Content>
          <div>
            {products.length > 0 ? (
              <>
                <ProductTable>
                  <thead>
                    <tr>
                      <th />
                      <th>PRODUTO</th>
                      <th>QTD</th>
                      <th>SUBTOTAL</th>
                      <th />
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
                          <div>
                            <button onClick={() => decrementAmount(product)}>
                              <MdRemoveCircleOutline
                                size={20}
                                color={'#7159c1'}
                              />
                            </button>
                            <input
                              type="text"
                              value={product.amount}
                              readOnly
                            />
                            <button onClick={() => incrementAmount(product)}>
                              <MdAddCircleOutline size={20} color={'#7159c1'} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <strong>{product.subTotal}</strong>
                        </td>
                        <td>
                          <button
                            onClick={() => handleRemoveToCart(product.id)}
                          >
                            <MdDelete size={20} color={'#7159c1'} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </ProductTable>
                <footer>
                  <Total>
                    <div>
                      <span>TOTAL</span>
                      <strong>{totalPrice}</strong>
                    </div>
                    <select onChange={(e) => setInstallments(e.target.value)}>
                      {renderInstallments()}
                    </select>
                  </Total>
                  <button type="button" onClick={() => handleAddToCheckout()}>
                    <Link to="/shipping">Continuar a compra</Link>
                  </button>
                </footer>
              </>
            ) : (
              <span>Você não possui nenhum produto no carrinho!</span>
            )}
          </div>
        </Content>
      </Container>
    </>
  );
}
