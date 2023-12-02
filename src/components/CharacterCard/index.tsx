import { memo } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CharacterDTO } from '@dtos';
import * as S from './styles';

type Props = TouchableOpacityProps & {
  item: CharacterDTO;
};

export const CharacterCard = memo(
  ({ item, ...rest }: Props) => (
    <S.Container {...rest}>
      <S.Image
          source={{
            uri: item?.image,
          }}
          alt={item?.name}
          resizeMode="cover"
        />

      <S.VStack>
        <S.TextName numberOfLines={2}>{item.name}</S.TextName>
        <S.Text>{item.species}</S.Text>
      </S.VStack>

      <S.Icon name="chevron-right" />
    </S.Container>
  ),
  (prevProps, nextProps) => {
    // Check if relevant props have changed to avoid unnecessary rendering
    return prevProps.item.id === nextProps.item.id;
  }
);
