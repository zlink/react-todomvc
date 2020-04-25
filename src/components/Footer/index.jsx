import React from 'react';
import { FooterWrapper } from './style';

const Footer = () => (
  <FooterWrapper>
    <span>3 items left</span>
    <ul>
      <li className="selected">All</li>
      <li>Active</li>
      <li>Completed</li>
    </ul>
  </FooterWrapper>
);

export default Footer;
