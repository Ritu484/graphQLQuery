import { gql } from "@apollo/client";
export const AllSpecies = gql`
  query {
    allSpecies {
      species {
        averageHeight
        averageLifespan
        classification
        created
        designation
        edited
        id
        eyeColors
      }
    }
  }
`;
