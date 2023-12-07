import { useQuery } from "@apollo/client";
import { AllSpecies } from "../../graphQL/Queries";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";

import { Link } from "@fluentui/react/lib/Link";

import { useState } from "react";
import { SpeciesPanelComponent } from "./components/SpeciesPanelComponent";

const AllSpeciesListView: React.FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, error, data } = useQuery(AllSpecies);
  const [recordID, setRecordID] = useState<string>("");

  //console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  let columns: IColumn[] = [
    {
      key: "classification",
      name: "classification",
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
          {item.classification}
        </Link>
      ),
    } as IColumn,
    {
      key: "eyeColors",
      name: "Eye Colors",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind

        <div style={{ whiteSpace: "pre-wrap" }}>
          {item.eyeColors.map((value: string, index: number) =>
            index < item.eyeColors.length - 1 ? value + "," : value
          )}
        </div>
      ),
    } as IColumn,
    {
      key: "created",
      name: "Created",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.created}</div>
      ),
    } as IColumn,
    {
      key: "designation",
      name: "Designation",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.designation}</div>
      ),
    } as IColumn,
    {
      key: "edited",
      name: "Edited",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.edited}</div>
      ),
    } as IColumn,
    {
      key: "averageLifespan",
      name: "Average Life pan",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.averageLifespan}</div>
      ),
    } as IColumn,
    {
      key: "averageHeight",
      name: "averageHeight",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.averageHeight}</div>
      ),
    } as IColumn,
  ];

  return (
    <div style={{ display: "flex" }}>
      <DetailsList
        items={data.allSpecies.species}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        constrainMode={ConstrainMode.unconstrained}
        isHeaderVisible={true}
      />
      <div style={{ width: "800px" }}>
        {isOpen && (
          <SpeciesPanelComponent
            recordID={recordID}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};
export default AllSpeciesListView;
