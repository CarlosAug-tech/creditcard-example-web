import React, { useState, useEffect } from 'react';
import pagarme from 'pagarme';
import { useSelector, useDispatch } from 'react-redux';

import api from '../../../services/api';
import showError from '../../../util/error';

import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { buySuccess } from '../../../store/modules/cart/actions';

import { FaSpinner } from 'react-icons/fa';
import { LoadingResult } from './styles';

export default function FormCheckout({ products, installments, totalRaw }) {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [loading, setLoading] = useState(false);

  const [holderName, setHolderName] = useState('');
  const [number, setNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const [data, setData] = useState({
    customer: {
      name: profile.name,
      email: profile.email,
      cpf: profile.cpf,
      rg: profile.rg,
      phone: profile.phone,
      birthday: profile.birthday,
    },
    address: {
      zipcode: profile.zipcode,
      street: profile.street,
      street_number: String(profile.street_number),
      neighborhood: profile.neighborhood,
      city: profile.city,
      state: profile.state,
    },
    card: {
      card_holder_name: holderName,
      card_number: number,
      card_expiration_date: expirationDate,
      card_cvv: cvv,
    },
  });

  useEffect(() => {
    setData({
      ...data,
      card: {
        card_holder_name: holderName,
        card_number: number,
        card_expiration_date: expirationDate,
        card_cvv: cvv,
      },
    });
  }, [holderName, number, expirationDate, cvv]);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    console.log(data);

    const { card: cardForm } = await data;

    delete data.card;

    try {
      console.log(cardForm);

      const client = await pagarme.client.connect({
        encryption_key: process.env.REACT_APP_PAGARME_ENCRYPTION_KEY,
      });

      let cardData = await client.security.encrypt(cardForm);

      console.log(cardData);

      await api.post('/checkouts', {
        ...data,
        items: products,
        amount: totalRaw,
        installments,
        card_hash: cardData,
      });
      dispatch(buySuccess());
    } catch (err) {
      showError(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder=" "
          onChange={(e) => setHolderName(e.target.value)}
          value={holderName}
        />
        <label htmlFor="">Nome no cartão</label>
      </div>
      <div>
        <input
          type="text"
          placeholder=" "
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <label htmlFor="">Número do cartão</label>
      </div>
      <div>
        <input
          type="text"
          placeholder=" "
          onChange={(e) => setExpirationDate(e.target.value)}
          value={expirationDate}
        />
        <label htmlFor="">Data de Expiração</label>
      </div>
      <div>
        <input
          type="text"
          placeholder=" "
          onChange={(e) => setCvv(e.target.value)}
          value={cvv}
        />
        <label htmlFor="">Código de Segurança</label>
      </div>
      <div>
        <Cards
          number={number}
          name={holderName}
          expiry={expirationDate}
          cvc={cvv}
        />
      </div>
      <button type="submit">
        {loading ? (
          <LoadingResult loading={loading}>
            <span>Finalizando pedido</span>
            <FaSpinner size={16} />
          </LoadingResult>
        ) : (
          'Finalizar Compra'
        )}
      </button>
    </form>
  );
}
