import { useCallback } from 'react';
import { View, ActivityIndicator, FlatList, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Header, CharacterCard, ListEmpty, Input } from '@components';
import { useFetchCharacters } from '@hooks/useFetchCharacters';
import { CharacterDTO } from '@dtos';
import * as S from './styles';

export function Home() {
  const {
    hasMore,
    handleSearch,
    characters,
    error,
    searchName,
    loadMoreCharacters,
  } = useFetchCharacters();

  const navigation = useNavigation();

  const theme = useTheme();

  const handleOpenDetails = useCallback(
    (characterId: string) => {
      navigation.navigate('details', { characterId });
    },
    [navigation],
  );

  const renderItem = useCallback(
    ({ item }: { item: CharacterDTO }) => (
      <CharacterCard item={item} onPress={() => handleOpenDetails(item.id)} />
    ),
    [handleOpenDetails],
  );

  const renderFooter = useCallback(() => {
    if (!hasMore) {
      return (
        <View style={{ padding: 10 }}>
          <S.Text>There are no more pages to display</S.Text>
        </View>
      );
    }

    return <ActivityIndicator size={'large'} color={theme.COLORS.GREEN_500} />;
  }, [hasMore]);

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <S.Container>
      <Header />

      <Input
        placeholder="Search character by name"
        onChangeText={handleSearch}
        value={searchName}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
