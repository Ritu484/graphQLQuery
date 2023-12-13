import { IColumn } from "@fluentui/react/lib/DetailsList";
export const columnsAllSpecies: IColumn[] = [
  {
    key: "classification",
    name: "Classification",
    fieldName: "classification",
    isResizable: true,
    minWidth: 100,
  } as IColumn,

  {
    key: "eyeColors",
    name: "Eye Colors",
    fieldName: "eyeColors",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "created",
    name: "Created",
    fieldName: "created",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "designation",
    name: "Designation",
    fieldName: "designation",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "edited",
    name: "Edited",
    fieldName: "edited",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "averageLifespan",
    name: "Average Life Span",
    fieldName: "averageLifespan",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "averageHeight",
    name: "Average Height",
    fieldName: "averageHeight",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
];
