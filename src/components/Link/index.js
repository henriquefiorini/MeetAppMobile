import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label } from './styles';

function Link({ children, ...rest }) {
  return (
    <Wrapper {...rest}>
      <Label>{children}</Label>
    </Wrapper>
  );
}

Link.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Link;
