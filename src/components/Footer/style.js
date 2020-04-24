import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  color: #777;
  padding: 10px 15px;
  display: flex;
  justify-content: space-around;
  span {
    flex: 0 0 64px;
  }
  ul {
    flex: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 3px 7px;
      a {
        text-decoration: none;
        color: #777;
        &:hover {
          color: red;
        }
      }
    }
  }
`;
