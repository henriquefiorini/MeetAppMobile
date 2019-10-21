import styled, { css } from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  flex-direction: row;
  margin-bottom: 16px;
  padding-top: 8px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 0 16px;
  border: 2px solid #ccd9df;
  border-radius: 4px;
  background-color: white;

  ${props =>
    props.isFocused &&
    css`
      border-color: #0f7ad8;
    `}
`;

export const Label = styled.Text`
  position: absolute;
  top: 26px;
  left: 12px;
  padding-right: 4px;
  padding-left: 4px;
  font-size: 14px;

  ${props =>
    (props.isFocused || props.hasValue) &&
    css`
      top: 0;
      background-color: white;
      font-size: 12px;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #0f7ad8;
    `}
`;
