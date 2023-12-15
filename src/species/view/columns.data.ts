import { IColumn } from "@fluentui/react/lib/DetailsList";
export const columnsSpeciesDetailView: IColumn[] = [
  {
    key: "director",
    name: "Director",
    minWidth: 50,
    maxWidth: 150,
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
    maxWidth: 100,
    isResizable: true,
  } as IColumn,
  {
    key: "title",
    name: "Title",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "created",
    name: "Created on",
    minWidth: 50,
    maxWidth: 150,
    isResizable: true,
  } as IColumn,
 
];
