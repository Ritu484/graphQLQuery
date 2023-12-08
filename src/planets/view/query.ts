import { gql } from "@apollo/client";
export const Planet = gql`
  query Planet($id: ID!) {
    planet(id: $id) {
      name
      climates
      gravity
      population
      rotationPeriod
      terrains
      surfaceWater
      id
      diameter
      created
      edited
      filmConnection {
        films {
          id
          episodeID
          edited
          director
          producers
          releaseDate
        }
      }
      orbitalPeriod
      residentConnection {
        totalCount
        residents {
          edited
          created
          birthYear
          height
          mass
          name
        }
      }
    }
  }
`;