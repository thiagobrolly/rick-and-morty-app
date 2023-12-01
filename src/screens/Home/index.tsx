import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { CharacterCard, ListEmpty } from '@components';
import { useFetchCharacters } from '@hooks/useFetchCharacters';
import { useTheme } from 'styled-components/native';
import * as S from './styles';

export function Home() {
  const {
    hasMore,
    characters,
    error,
    searchName,
    loadMoreCharacters,
  } = useFetchCharacters();

  const theme = useTheme();

  const renderFooter = () => {
    if (!hasMore) {
      return (
        <View style={{ padding: 10 }}>
          <S.Title>There are no more pages to display</S.Title>
        </View>
      );
    }

    return <ActivityIndicator size={'large'} color={theme.COLORS.GREEN_500} />;
  };

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <S.Container>
      <FlatList
        style={{ marginTop: 20 }}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CharacterCard
            item={item}
          />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          characters.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() =>
          !hasMore && <ListEmpty message="No characters found" />
        }
        onEndReached={loadMoreCharacters}
        onEndReachedThreshold={0.1}
        ListFooterComponent={searchName.length === 0 ? renderFooter : <></>}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
