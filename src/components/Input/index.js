import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, TextInput } from './styles';

function Input({ label, value, ...rest }) {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = useMemo(() => !!value.length > 0, [value]);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Wrapper>
      <TextInput
        isFocused={isFocused}
        hasValue={hasValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <Label isFocused={isFocused} hasValue={hasValue}>
        {label}
      </Label>
    </Wrapper>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
