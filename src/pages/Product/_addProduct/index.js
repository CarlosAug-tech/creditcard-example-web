import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';

import api from '../../../services/api';
import history from '../../../services/history';

import noProductImage from '../../../assets/Image/postNoImage.png'

import {Container, Content, ImageSelect} from './styles'

export default function AddProduct() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')

  const [preview, setPreview] = useState()
  const [imageId, setImageId] = useState()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await api.post('/products', {
        name,
        description,
        price,
        image_id: imageId,
        amount
      })
      history.push('/') 
    }catch(err) {
      console.log(err)
    }
  }

  async function handleChangeImage(e){
    const data = new FormData()
    data.append('file', e.target.files[0])

    const response = await api.post('/files', data)
    const {id, url} = response.data;

    setPreview(url)
    setImageId(id)

  }

  return(
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
          <ImageSelect>
            <img src={preview || noProductImage} alt=""/>
            <input type="file" id="productImage" onChange={handleChangeImage} accept="img/*" />
            <label htmlFor="productImage">
              <FiCamera size={20} color="#fff" />
            </label>
          </ImageSelect>
          <input type="text" placeholder="Nome do produto:" onChange={e => setName(e.target.value)} value={name} />
          <input type="text" placeholder="Descrição do produto:" onChange={e => setDescription(e.target.value)} value={description} />
          <input type="text" placeholder="Preço do produto:" onChange={e => setPrice(e.target.value)} value={price} />
          <input type="text" placeholder="Quantidade do produto:" onChange={e => setAmount(e.target.value)} value={amount} />
          <button type="submit">Adicionar Produto</button>
        </form>
      </Content>
    </Container>

  )
}