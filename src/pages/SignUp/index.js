import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import {signUpRequest} from '../../store/modules/auth/actions'

export default function SignUp(){
  const dispacth = useDispatch()

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cpf, setCpf] = useState();
  const [rg, setRg] = useState();
  const [birthday, setBirthday] = useState();
  const [phone, setPhone] = useState();

  const [street, setStreet] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [streetNumber, setStreetNumber] = useState();
  const [zipcode, setZipcode] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();


  function handleSubmit(e) {
    e.preventDefault()

    const data = {
      name,
      email,
      password,
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
    }

    dispacth(signUpRequest(data))
  }

  return(
   <form onSubmit={handleSubmit}>
    <h3>Dados Pessoais</h3>
    <hr/>
    <div>
      <input type="text" placeholder=" " onChange={e => setName(e.target.value)} value={name} />
      <label htmlFor="">Nome:</label>
    </div>
    <div>
      <input type="email" placeholder=" " onChange={e => setEmail(e.target.value)} value={email} />
      <label htmlFor="">E-mail:</label>
    </div>
    <div>
      <input type="password" placeholder=" " onChange={e => setPassword(e.target.value)} value={password} />
      <label htmlFor="">Senha:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setCpf(e.target.value)} value={cpf} />
      <label htmlFor="">CPF:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setRg(e.target.value)} value={rg} />
      <label htmlFor="">RG:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setBirthday(e.target.value)} value={birthday} />
      <label htmlFor="">Data de aniversário:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setPhone(e.target.value)} value={phone} />
      <label htmlFor="">Telefone:</label>
    </div>
    <hr/>
    <h3>Endereço</h3>
    <hr/>
    <div>
      <input type="text" placeholder=" " onChange={e => setStreet(e.target.value)} value={street} />
      <label htmlFor="">Rua:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setNeighborhood(e.target.value)} value={neighborhood} />
      <label htmlFor="">Bairro:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setStreetNumber(e.target.value)} value={streetNumber} />
      <label htmlFor="">Número da casa:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setZipcode(e.target.value)} value={zipcode} />
      <label htmlFor="">CEP:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setCity(e.target.value)} value={city} />
      <label htmlFor="">Cidade:</label>
    </div>
    <div>
      <input type="text" placeholder=" " onChange={e => setState(e.target.value)} value={state} />
      <label htmlFor="">Estado:</label>
    </div>
    <button type="submit">Cadastrar</button>
   </form>
  )
}