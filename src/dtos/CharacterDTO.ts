import { EpisodeDTO } from "./EpisodeDTO";

export interface CharacterDTO {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  created: string;
  origin: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
  episode: EpisodeDTO[];
}
