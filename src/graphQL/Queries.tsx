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

