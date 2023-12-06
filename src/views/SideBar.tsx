import { useQuery } from "@apollo/client";
import { AllPlanets } from "../graphQL/Queries";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";

import { Link } from "@fluentui/react/lib/Link";

import { useState } from "react";
import { PanelComponent } from "../components/PanelComponent";

const SideBar: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(AllPlanets);
  const [recordID, setRecordID] = useState<string>("");

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  let columns: IColumn[] = [
    {
      key: "name",
      name: "Name",
      isResizable: true,

      minWidth: 100,

      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <Link
          key={item.id}
          onClick={() => {
            setRecordID(item.id);
            setIsOpen(true);
          }}
        >
          {item.name}
        </Link>
      ),
    } as IColumn,
    {
      key: "climates",
      name: "Climates",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,

      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind

        <div style={{ whiteSpace: "pre-wrap" }}>
          {item.climates.map((value: string, index: number) =>
            index < item.climates.length - 1 ? value + "," : value
          )}
        </div>
      ),
    } as IColumn,
    {
      key: "gravity",
      name: "Gravity",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.gravity}</div>
      ),
    } as IColumn,
    {
      key: "population",
      name: "Population",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.population}</div>
      ),
    } as IColumn,
    {
      key: "rotationPeriod",
      name: "Rotation Period",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.rotationPeriod}</div>
      ),
    } as IColumn,
    {
      key: "terrains",
      name: "Terrains",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div style={{ whiteSpace: "pre-wrap" }}>
          {item.terrains.map((value: string, index: number) =>
            index < item.terrains.length - 1 ? value + "," : value
          )}
        </div>
      ),
    } as IColumn,
    {
      key: "surfaceWater",
      name: "Surface Water",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.surfaceWater}</div>
      ),
    } as IColumn,
  ];

  return (
    <div style={{ display: "flex" }}>
      {/* {JSON.stringify(data)} */}
      {/* {data.allPlanets.planets[0].name} */}
      <DetailsList
        items={data.allPlanets.planets}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        constrainMode={ConstrainMode.unconstrained}
        isHeaderVisible={true}
        setKey="set"
        selectionPreservedOnEmptyClick={true}
        ariaLabelForSelectionColumn="Toggle selection"
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        checkButtonAriaLabel="Row checkbox"
      />
      <div style={{ width: "800px" }}>
        {isOpen && (
          <PanelComponent recordID={recordID} isOpen={isOpen} setIsOpen ={setIsOpen}/>
        )}
      </div>
    </div>
  );
};
export default SideBar;
