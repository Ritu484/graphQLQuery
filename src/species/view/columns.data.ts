import { IColumn } from "@fluentui/react/lib/DetailsList";
export const columnsSpeciesDetailView: IColumn[] = [
  {
    key: "director",
    name: "director",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "producers",
    name: "producers",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div style={{ whiteSpace: "pre-wrap" }}>
    //     {item.producers.map((value: string, index: number) =>
    //       index < item.producers.length - 1 ? value + "," : value
    //     )}
    //   </div>
    // ),
  } as IColumn,
  {
    key: "releaseDate",
    name: "releaseDate",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "title",
    name: "title",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
  {
    key: "created",
    name: "created",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
  } as IColumn,
];
