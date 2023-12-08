import { IColumn } from "@fluentui/react/lib/DetailsList";
export const columns: IColumn[] = [
  {
    key: "name",
    name: "Name",
    fieldName: "name",
    isResizable: true,
    minWidth: 100,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <Link
    //     key={item.id}
    //     onClick={() => {
    //       setRecordID(item.id);
    //       setIsOpen(true);
    //     }}
    //   >
    //     {item.name}
    //   </Link>
    // ),
  } as IColumn,
  {
    key: "climates",
    name: "Climates",
    fieldName: "climates",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind

    //   <div style={{ whiteSpace: "pre-wrap" }}>
    //     {item.climates.map((value: string, index: number) =>
    //       index < item.climates.length - 1 ? value + "," : value
    //     )}
    //   </div>
    // ),
  } as IColumn,
  {
    key: "gravity",
    name: "Gravity",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div> {item.gravity}</div>
    // ),
  } as IColumn,
  {
    key: "population",
    name: "Population",
    fieldName: "population",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div> {item.population}</div>
    // ),
  } as IColumn,
  {
    key: "rotationPeriod",
    name: "Rotation Period",
    fieldName: "rotationPeriod",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div> {item.rotationPeriod}</div>
    // ),
  } as IColumn,
  {
    key: "terrains",
    name: "Terrains",
    fieldName: "terrains",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div style={{ whiteSpace: "pre-wrap" }}>
    //     {item.terrains.map((value: string, index: number) =>
    //       index < item.terrains.length - 1 ? value + "," : value
    //     )}
    //   </div>
    // ),
  } as IColumn,
  {
    key: "surfaceWater",
    name: "Surface Water",
    fieldName: "surfaceWater",
    minWidth: 50,
    maxWidth: 200,
    isResizable: true,
    // onRender: (item) => (
    //   // eslint-disable-next-line react/jsx-no-bind
    //   <div> {item.surfaceWater}</div>
    // ),
  } as IColumn,
];