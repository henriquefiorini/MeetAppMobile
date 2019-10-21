import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Wrapper = styled(RectButton)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
  background-color: #0c344b;
`;

export const Label = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;
