import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import DogLogin from '../../assets/image/login.jpg';
import Dogs from '../../assets/image/dogs.svg';

import {
  Main,
  Footer,
  SubTitle,
  Container,
  Left,
  Right,
  Title,
  LinkReset,
} from './styles';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: any) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Main>
        <Left>
          <img src={DogLogin} alt="Foto de capa login" />
        </Left>
        <Right>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>Login</Title>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" />
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" />
            <Button>Entrar</Button>
            <LinkReset>Perdeu a senha?</LinkReset>

            <div>
              <SubTitle>Cadastre-se</SubTitle>
              <p>Ainda não possui conta? Cadastre-se no site.</p>
              <Button>Cadastro</Button>
            </div>
          </Form>
        </Right>
      </Main>
      <Footer>
        <img src={Dogs} alt="Logo" />
        <p>Dogs. Alguns direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default SignIn;
