import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: #777;
  padding: 10px 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  span {
    flex: 0 0 100px;
  }
  ul {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0 0 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      display: inline;
      color: inherit;
      margin: 3px;
      padding: 3px 7px;
      border: 1px solid transparent;
      border-radius: 3px;
    }
    &.selectd {
      border-color: rgba(175, 47, 47, 0.2);
    }
  }
`;
