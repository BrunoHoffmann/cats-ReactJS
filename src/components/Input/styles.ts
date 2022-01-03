import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${props =>
    props.isFocused &&
    css`
      border-color: rgb(245, 245, 245);
    `}
  ${props =>
    props.isFilled &&
    css`
      border-color: rgb(245, 245, 245);
    `}

  input {
    z-index: 1;
    /* width: 320px; */
    height: 38px;
    width: 100%;

    box-sizing: border-box;
    background: rgb(240, 240, 240);
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 1em;
    color: #666360;

    &::placeholder {
      color: rgba(0, 0, 0, 0.2);
      font-weight: 500;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: start;
  margin-top: 8px;
  margin-left: 10px;

  span {
    color: rgb(236, 62, 61);
    font-size: 0.8em;
    font-weight: 500;
    margin-top: -20px;

    &&::before {
      border-color: rgb(236, 62, 61) transparent;
    }
  }
`;
