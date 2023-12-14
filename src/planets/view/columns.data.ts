import { IColumn } from "@fluentui/react/lib/DetailsList";

export const columnsFilmConnection: IColumn[] = [
  {
    key: "episodeID",
    name: "Episode ID",
    minWidth: 50,
    maxWidth: 80,
    isResizable: true,
  } as IColumn,
  {
    key: "edited",
    name: "Edited on",
    minWidth: 50,
    maxWidth: 150,
    isResizable: true,
  } as IColumn,

  {
    key: "director",
    name: "Director",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "producers",
    name: "Producers",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "releaseDate",
    name: "Release Date",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
];
export const columnsResidents: IColumn[] = [
  {
    key: "edited",
    name: "Edited On",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "created",
    name: "Created on",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "birthYear",
    name: "Birth Year",
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
  } as IColumn,
  {
    key: "height",
    name: "Height",
    minWidth: 50,
    maxWidth: 50,
    isResizable: true,
  } as IColumn,
  {
    key: "mass",
    name: "Mass",
    minWidth: 50,
    maxWidth: 50,
    isResizable: true,
  } as IColumn,
  {
    key: "name",
    name: "Name",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
];
