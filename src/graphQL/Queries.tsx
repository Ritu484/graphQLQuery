import { gql } from "@apollo/client";

export const AllPlanets = gql`
  query  {
    allPlanets {
      planets {
        name
        climates
        gravity
        population
        rotationPeriod
        terrains
        surfaceWater
        id
      }
    }
  }
`;
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
const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

