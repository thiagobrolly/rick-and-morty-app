import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export const Form = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_700};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    min-height: 56px;
    max-height: 56px;
    border-radius: 6px;
    padding: 16px;
    
    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_700,
}))`
  margin: 0 10px;
`;