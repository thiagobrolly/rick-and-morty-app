import { CharacterDTO } from './CharacterDTO';
import { PageInfoDTO } from './PageInfoDTO';

export interface CharactersDTO {
  characters: {
    results: CharacterDTO[];
    info: PageInfoDTO;
  };
}
