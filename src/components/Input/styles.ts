import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px #232129;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 10px;
  }

  svg {
    margin-right: 10px;
    color: #666360;
  }

  input {
    flex: 1;
    background: transparent;
    color: #f4ede8;
    border: none;
    &::placeholder {
      color: #666360;
    }
  }
`;
