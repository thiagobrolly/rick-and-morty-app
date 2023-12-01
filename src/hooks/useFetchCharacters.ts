import { useEffect, useState } from 'react';
import { CharacterDTO, CharactersDTO } from '@dtos';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTERS } from '@services/queries';

export function useFetchCharacters() {
  const [characters, setCharacters] = useState<CharacterDTO[]>([]);
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const [fetchCharacters, { loading, data, error }] =
    useLazyQuery<CharactersDTO>(GET_CHARACTERS);

  useEffect(() => {
    if (data && data.characters) {
      setCharacters([...characters, ...data.characters.results]);
      setHasMore(data.characters.info.next !== null);
    }
  }, [data]);

  useEffect(() => {
    fetchCharacters({ variables: { page, name: searchName } });
  }, [page, searchName]);

  const loadMoreCharacters = () => {
    if (hasMore) {
      setPage(page + 1);
    }
  };

  const handleSearch = (text: string) => {
    setPage(1);
    setCharacters([]);
    setSearchName(text);
  };

  return {
    handleSearch,
    loadMoreCharacters,
    hasMore,
    searchName,
    error,
    loading,
    characters,
  };
}
