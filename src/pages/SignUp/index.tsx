import React, { useState, FormEvent, useCallback } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

const SingUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'No minimo 6 digitos'),
        });

        const regist = {
          name,
          email,
          password,
        };

        await schema.validate(regist, {
          abortEarly: false,
        });
      } catch (error) {
        console.log({ error });
      }
    },
    [name, email, password],
  );

  return (
    <Container>
      <Background />
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            name="email"
            type="email"
            icon={FiMail}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button type="submit">Entrar</Button>
        </form>
        <Link to="/">
          <FiArrowLeft />
          Voltar para logon
        </Link>
      </Content>
    </Container>
  );
};

export default SingUp;
