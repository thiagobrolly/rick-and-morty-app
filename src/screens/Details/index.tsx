import { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useQuery } from '@apollo/client';
import { Header, Loading } from '@components';
import { CharacterDetailsDTO, CharacterDTO } from '@dtos';
import { GET_CHARACTER_DETAILS } from '@services/queries';
import * as S from './styles';

type RouteParamsProps = {
  characterId: string;
};

export function Details() {
  const [character, setCharacter] = useState<CharacterDTO>();

  const route = useRoute();

  const { characterId } = route.params as RouteParamsProps;

  const { loading, error, data, fetchMore } = useQuery<CharacterDetailsDTO>(
    GET_CHARACTER_DETAILS,
    {
      variables: { characterId },
    },
  );

  useEffect(() => {
    if (!loading && data) {
      setCharacter(data?.character);
    }

    return;
  }, [loading, data]);

  if (loading) return <Loading />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <S.Container>
      <Header showBackButton title="Details" />

      <S.Content>
        <S.Image
          source={{
            uri: character?.image,
          }}
          alt={character?.name}
          resizeMode="cover"
        />
        <S.Title>{character?.name}</S.Title>
        <S.Info>
          <S.TextInfo>Species: {character?.species}</S.TextInfo>
          <S.TextInfo>Location: {character?.location.name}</S.TextInfo>
        </S.Info>
      </S.Content>

      <FlatList
        data={data?.character?.episode}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <S.HeadingList>Episodes: </S.HeadingList>
        )}
        renderItem={({ item }) => (
          <S.EpisodeCard>
            <S.TextInfo>{item.name}</S.TextInfo>
            <S.TextInfo>{item.episode}</S.TextInfo>
          </S.EpisodeCard>
        )}
        contentContainerStyle={[
          { paddingBottom: 100, marginTop: 10 },
        ]}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
