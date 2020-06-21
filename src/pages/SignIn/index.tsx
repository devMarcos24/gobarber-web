import React, { useCallback, useRef, useState } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg';

import Button from '../../components/Button';
import Input from '../../components/Input';

interface SignInFormData {
  name: string;
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  password: string;
}

const SingIn: React.FC = () => {
  const [myUser, setMyUser] = useState<User>(
    (): User => {
      const user = localStorage.getItem('@GoBarber:user');

      if (user) {
        return JSON.parse(user);
      }
      return {} as User;
    },
  );
  const forRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        forRef.current?.setErrors({});
        const schema = Yup.object({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        if (myUser) {
          await signIn({
            email: data.email,
            password: data.password,
          });
        }

        setMyUser({} as User);

        addToast({
          type: 'success',
          title: `Bem vindo ${myUser?.name}`,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          forRef.current?.setErrors(errors);
          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, myUser, addToast],
  );

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="GoBarber" />
        <Form ref={forRef} onSubmit={handleSubmit}>
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
        </Form>
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
