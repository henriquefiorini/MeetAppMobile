import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

function Page({ title, verticalAlign, children, ...rest }) {
  return (
    <Container verticalAlign={verticalAlign} {...rest}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  verticalAlign: PropTypes.oneOf(['top', 'center', 'bottom']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Page.defaultProps = {
  title: null,
  verticalAlign: 'top',
  children: null,
};

export default Page;
