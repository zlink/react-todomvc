import styled from 'styled-components';

export const TodoInputWrapper = styled.div`
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  height: 65px;
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  input {
    flex: 1;
    height: 100%;
    font-size: 24px;
    line-height: 1.4;
    color: inherit;
    border: none;
    outline: none;
    margin-left: 16px;
    font-weight: inherit;
    font-family: inherit;
  }
  label {
    flex: 0 0 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      transform: rotate(90deg);
      content: '❯';
      font-size: 22px;
      color: #e6e6e6;
    }
  }
`;
