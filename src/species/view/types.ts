export type SpeciesView = {
  averageHeight: number;
  averageLifespan: string;
  classification: string;
  created: string;
  eyeColors: [string];
  filmConnection: FilmConnection;
  designation: string;
  hairColors: [string];
  homeworld: HomeWorld;
};

export type FilmConnection = {
  films: Films;
};

export type Films = {
  director: string;
  producers: string;
  releaseDate: string;
  title: string;
  created: string;
};
export type HomeWorld = {
  name: string;
  terrains: [string];
  surfaceWater: string;
  rotationPeriod: string;
  population: string;
};
