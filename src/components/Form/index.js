import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container } from './styles';

function Form({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Form.defaultProps = {
  children: null,
};

export default Form;
