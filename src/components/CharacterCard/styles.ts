import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 116px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 8px;
`

export const VStack = styled.View`
  flex: 1;
`

export const TextName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_700,
}))`
  margin-left: auto;
`;