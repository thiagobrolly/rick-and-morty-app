import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import { Header } from '@components';
import * as S from './styles';

type RouteParamsProps = {
  characterId: string;
};

export function Details() {
  const route = useRoute();

  const { characterId } = route.params as RouteParamsProps;

  return (
    <S.Container>
      <Header showBackButton title="Details" />
      <Text>{characterId}</Text>
    </S.Container>
  );
}
