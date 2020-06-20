import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  color: #666360;
  border: 2px solid #232129;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isField &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 10px;
  }

  svg {
    margin-right: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: 0;
    &::placeholder {
      color: #666360;
    }
  }
`;
