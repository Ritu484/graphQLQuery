import { gql } from "@apollo/client";

export const AllPlanets = gql`
  query {
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
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;
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
