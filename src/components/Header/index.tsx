import { useNavigation } from '@react-navigation/native';
import * as S from './styles';

import logoImg from '@assets/logo.png';
import { View } from 'react-native';

type Props = {
  showBackButton?: boolean;
  title?: string;
};

export function Header({ showBackButton, title }: Props) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <S.Container>
      {showBackButton ? (
        <S.Content>
          <S.BackButton onPress={handleGoBack}>
            <S.BackIcon />
          </S.BackButton>
          <S.Title>{title}</S.Title>
        </S.Content>
      ) : (
        <S.Logo source={logoImg} />
      )}
    </S.Container>
  );
}
