import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import history from '../../services/history';
import ProgressLine from '../../components/ProgressLine';

import { profileUpdateRequest } from '../../store/modules/user/actions';

import { Container, Content } from './styles';
// import { toast } from 'react-toastify';

export default function FormPersonal() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [cpf, setCpf] = useState(profile.cpf);
  const [rg, setRg] = useState(profile.rg);
  const [phone, setPhone] = useState(profile.phone);
  const [birthday, setBirthday] = useState(profile.birthday);

  const [zipcode, setZipcode] = useState(profile.zipcode);
  const [street, setStreet] = useState(profile.street);
  const [streetNumber, setStreetNumber] = useState(profile.street_number);
  const [neighborhood, setNeighborhood] = useState(profile.neighborhood);
  const [city, setCity] = useState(profile.city);
  const [state, setState] = useState(profile.state);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      name !== profile.name ||
      email !== profile.email ||
      cpf !== profile.cpf ||
      rg !== profile.rg ||
      phone !== profile.phone ||
      birthday !== profile.birthday ||
      zipcode !== profile.zipcode ||
      street !== profile.street ||
      streetNumber !== profile.street_number ||
      neighborhood !== profile.neighborhood ||
      city !== profile.city ||
      state !== profile.state
    ) {
      const data = {
        name,
        email,
        cpf,
        rg,
        phone,
        birthday,
        zipcode,
        street,
        streetNumber,
        neighborhood,
        city,
        state,
      };
      dispatch(profileUpdateRequest(data));
    }

    history.push('/checkout');
  }

  return (
    <>
      <ProgressLine progress1 progress2 />
      <Container>
        <Content>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>Dados Pesssoais:</h3>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <label htmlFor="">Nome:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label htmlFor="">E-mail:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setCpf(e.target.value)}
                  value={cpf}
                />
                <label htmlFor="">CPF:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setRg(e.target.value)}
                  value={rg}
                />
                <label htmlFor="">RG:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
                <label htmlFor="">Telefone:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                />
                <label htmlFor="">Data de Aniversario:</label>
              </div>

              <hr />

              <h3>Endereço:</h3>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setZipcode(e.target.value)}
                  value={zipcode}
                />
                <label htmlFor="">CEP:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setStreet(e.target.value)}
                  value={street}
                />
                <label htmlFor="">Rua:</label>
              </div>
              <div>
                <input
                  type="number"
                  placeholder=" "
                  onChange={(e) => setStreetNumber(e.target.value)}
                  value={streetNumber}
                />
                <label htmlFor="">Número da Rua:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setNeighborhood(e.target.value)}
                  value={neighborhood}
                />
                <label htmlFor="">Bairro:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                />
                <label htmlFor="">Cidade:</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder=" "
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                />
                <label htmlFor="">Estado:</label>
              </div>

              <hr />

              <button>Prosseguir com o pedido</button>
            </form>
          </div>
        </Content>
      </Container>
    </>
  );
}
