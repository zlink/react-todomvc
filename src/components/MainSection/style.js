import styled from 'styled-components';

export const MainSectionWrapper = styled.section`
  position: relative;
  z-index: 2;
  border: 1px solid #e6e6e6;
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  font-weight: 300;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      position: relative;
      font-size: 24px;
      border: 1px solid #ededed;
    }
  }
`;
