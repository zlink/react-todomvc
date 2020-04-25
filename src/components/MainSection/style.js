import styled from 'styled-components';

export const MainSectionWrapper = styled.section`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 24px;
    color: inherit;
    li {
      display: flex;
      border-bottom: 1px solid #ededed;
      box-sizing: border-box;
      align-items: center;
      height: 55px;
      .check {
        display: flex;
        justify-content: center;
        flex: 0 0 65px;
        input {
          background: none;
          height: 40px;
        }
      }
      label{
        flex: 1;
        word-break: break-all;
        padding: 15px 15px 15px 60px;
        display: block;
        line-height: 1.2;
        transition: color 0.4s;
      }
      .btn {
        display: flex;
        justify-content: center;
        flex: 0 0 50px;
        /* display: none; */
        width: 40px;
        height: 40px;
        color: #cc9a9a;
      }
    }    
  }
`;
