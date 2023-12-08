import { gql } from "@apollo/client";
export const Species = gql`
  query Species($speciesId: ID) {
    species(id: $speciesId) {
      averageHeight
      averageLifespan
      classification
      created
      eyeColors
      filmConnection {
        films {
          director
          producers
          releaseDate
          title
          created
        }
      }
      designation
      hairColors
      homeworld {
        name
        terrains
        surfaceWater
        rotationPeriod
        population
      }
    }
  }
`;
