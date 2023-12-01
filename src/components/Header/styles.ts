import styled, { css } from 'styled-components/native';
import { CaretLeft } from "phosphor-react-native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 170px;
  height: 50px;
`

export const BackButton = styled.TouchableOpacity`
`;

export const BackIcon = styled(CaretLeft).attrs(({theme}) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    margin-left: auto;
  `}
`;