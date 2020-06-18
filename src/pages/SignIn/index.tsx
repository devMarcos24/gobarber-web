import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SingIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="Email" />
        <Input
          name="password"
          type="password"
          icon={FiLock}
          placeholder="Senha"
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

export default SingIn;
