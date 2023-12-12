export type PlanetView = {
  name: string;
  climates: [string];
  gravity: string;
  population: number;
  rotationPeriod: number;
  terrains: [string];
  surfaceWater: number;
  id: string;
  diameter: number;
  created: string;
  edited: string;
  filmConnection: FilmConnection;
  orbitalPeriod: number;
  residentConnection: ResidentConnection;
};

export type FilmConnection = {
  films: Films;
};
export type Films = {
  id: string;
  episodeID: number;
  edited: string;
  director: string;
  producers: string;
  releaseDate: string;
};
export type ResidentConnection = {
  totalCount: number;
  residents: Residents;
};
export type Residents = {
  edited: string;
  created: string;
  birthYear: string;
  height: number;
  mass: number;
  name: string;
};
