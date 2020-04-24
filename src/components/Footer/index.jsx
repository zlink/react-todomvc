import React from 'react';
import { FooterWrapper } from './style';

const Footer = () => (
  <FooterWrapper>
    <span>3 items left</span>
    <ul>
      <li>
        <a href="#">All</a>
      </li>
      <li>
        <a href="#">Active</a>
      </li>
      <li>
        <a href="#">Completed</a>
      </li>
    </ul>
  </FooterWrapper>
);

export default Footer;
