import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      image
      created
      origin {
        id
        name
      }
      location {
        id
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;