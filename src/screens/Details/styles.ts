import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  align-items: center;
  width: 100%;
`;

export const Info = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  border-radius: 99999px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const TextInfo = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const HeadingList = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
    margin-bottom: 8px;
  `}
`;

export const EpisodeCard = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
`;