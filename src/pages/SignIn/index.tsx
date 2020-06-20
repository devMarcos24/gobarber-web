import React, { useState, useCallback, FormEvent } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SingIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent): object => {
      event.preventDefault();

      const verifyConexion = {
        email,
        password,
      };

      return verifyConexion;
    },
    [email, password],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            icon={FiMail}
            placeholder="Email"
            value={email}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
            value={password}
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SingIn;
