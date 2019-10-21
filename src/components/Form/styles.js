import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Wrapper = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({
    ios: 'padding',
    android: null,
  }),
})`
  margin-bottom: 24px;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;
