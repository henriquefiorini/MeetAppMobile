import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  background-color: white;

  justify-content: ${props => {
    if (props.verticalAlign === 'top') {
      return 'flex-start';
    }
    if (props.verticalAlign === 'center') {
      return 'center';
    }
    return 'flex-end';
  }};
`;

export const Title = styled.Text`
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: 600;
`;
