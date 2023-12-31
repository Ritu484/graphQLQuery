import { IColumn } from "@fluentui/react/lib/DetailsList";

export const columns: IColumn[] = [
  {
    key: "name",
    name: "Name",
    fieldName: "name",
    isResizable: true,
    minWidth: 50,
    maxWidth: 200,
  } as IColumn,
  {
    key: "climates",
    name: "Climates",
    fieldName: "climates",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "gravity",
    name: "Gravity",
    fieldName: "gravity",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "population",
    name: "Population",
    fieldName: "population",
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
  } as IColumn,
  {
    key: "rotationPeriod",
    name: "Rotation Period",
    fieldName: "rotationPeriod",
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
    
  } as IColumn,
  {
    key: "terrains",
    name: "Terrains",
    fieldName: "terrains",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    isMultiLine: true,
  } as IColumn,
  {
    key: "surfaceWater",
    name: "Surface Water",
    fieldName: "surfaceWater",
    minWidth: 50,
    maxWidth: 100,
    isResizable: true,
  } as IColumn,
];
