import React, { useState } from 'react';
import api from '../../services/api';

import { MdSearch } from 'react-icons/md';
import { Container, Box } from './styles';
import logo from '../../assets/img/logo.png';

export default function Home() {
  const [cep, setCep] = useState('');
  const [info, setInfo] = useState({});

  const handleChangeCep = e => {
    setCep(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { data } = await api.get(`/${cep}/json`);

    setInfo(data);
  };

  const { logradouro, complemento, bairro, localidade, uf, ibge } = info;
  return (
    <Container>
      <Box>
        <header>
          <img src={logo} alt='Logo' />
        </header>
        <form onSubmit={handleSubmit}>
          <input type='text' onChange={handleChangeCep} value={cep} />
          <button>
            <MdSearch />
          </button>
        </form>
        <section>
          <div>
            <strong>Logradouro:</strong>
            <span>{logradouro}</span>
          </div>
          <div>
            <strong>Complemento:</strong>
            <span>{complemento}</span>
          </div>
          <div>
            <strong>Bairro:</strong>
            <span>{bairro}</span>
          </div>
          <div>
            <strong>Localidade:</strong>
            <span>{localidade}</span>
          </div>
          <div>
            <strong>UF:</strong>
            <span>{uf}</span>
          </div>
          <div>
            <strong>IBGE:</strong>
            <span>{ibge}</span>
          </div>
        </section>
      </Box>
    </Container>
  );
}
