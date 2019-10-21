import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 16,
    right: 16,
    bottom: 16,
    left: 16,
  },
})`
  flex: 0;
`;

export const Label = styled.Text`
  color: #0f7ad8;
  font-size: 14px;
  font-weight: bold;
`;
