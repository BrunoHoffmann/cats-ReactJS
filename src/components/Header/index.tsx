import React from 'react';
import { FiUser } from 'react-icons/fi';
import Dogs from '../../assets/image/dogs.svg';

import { Container, Nav, Logo, Login } from './styles';

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Nav>
          <Logo>
            <img src={Dogs} alt="Foto de um cachorro" />
          </Logo>
          {/* <Login>Nome</Login> */}
          <Login>
            Login / Criar
            <FiUser size={18} />
          </Login>
        </Nav>
      </Container>
    </>
  );
};

export default Header;
