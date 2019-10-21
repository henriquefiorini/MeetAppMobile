import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label } from './styles';

function Button({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Label>{children}</Label>
    </Wrapper>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
