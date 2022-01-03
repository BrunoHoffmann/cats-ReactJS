import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div``;

export const Left = styled.div`
  width: 100%;
`;

export const Right = styled.div`
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 160px;
  background: #fb1;

  img {
    width: 35px;
  }

  p {
    color: #333;
    margin-top: 15px;
  }
`;

export const Title = styled.h1`
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const SubTitle = styled.h2`
  line-height: 1;
  font-size: 2rem;

  &:after {
    content: '';
    display: block;
    background: #ddd;
    height: 0.5rem;
    width: 3rem;
    border-radius: 0.2rem;
  }
`;

export const LinkReset = styled.a`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
  cursor: pointer;

  &:after {
    content: '';
    height: 2px;
    width: 100%;
    background: currentColor;
    display: block;
  }
`;
