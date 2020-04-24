import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoTextInput from '../TodoTextInput';
import { HeaderWrapper } from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <h1>todos</h1>
      <TodoTextInput />
    </HeaderWrapper>
  );
};

Header.propTypes = {
  addTodo: PropTypes.func,
};

export default connect()(Header);
