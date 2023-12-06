import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { useQuery } from "@apollo/client";
import { makeStyles, shorthands, useId } from "@fluentui/react-components";
import { Planet } from "../graphQL/Queries";
import { ControlledTextField } from "./ControlledTextField";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";
interface IMyProps {
  recordID: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PanelComponent: React.FunctionComponent<IMyProps> = ({
  recordID,
  isOpen,
  setIsOpen,
}) => {
  const { reset, control } = useForm();

  // const [isOpen, setIsOpen] = React.useState(true);
  const { loading, error, data } = useQuery(Planet, {
    variables: { id: recordID },
  });
  console.log(JSON.stringify(data?.planet.filmConnection.films));
  let columns: IColumn[] = [
    {
      key: "episodeID",
      name: "Episode ID",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.episodeID}</div>
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
  ];
  useEffect(() => {
    reset({
      name: data?.planet.name,
      climates: data?.planet.climates,
      gravity: data?.planet.gravity,
      population: data?.planet.population,
      rotationPeriod: data?.planet.rotationPeriod,
    });
  }, [data]);
   if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  return (
    <Panel
      headerText="Planet Details"
      type={PanelType.large}
      customWidth="800px"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      closeButtonAriaLabel="Close"
    >
      <form>
        <ControlledTextField
          label="Name"
          control={control}
          name="name"
          readOnly
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <div style={{ flex: 1, marginRight: "20px" }}>
            <ControlledTextField
              label="Climates"
              control={control}
              name="climates"
              readOnly
            />
          </div>
          <div style={{ flex: 1 }}>
            <ControlledTextField
              label="Gravity"
              control={control}
              name="gravity"
              readOnly
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <div style={{ flex: 1, marginRight: "20px" }}>
            <ControlledTextField
              label="Population"
              control={control}
              name="population"
              readOnly
            />
          </div>
          <div style={{ flex: 1 }}>
            <ControlledTextField
              label="Rotation Period"
              control={control}
              name="rotationPeriod"
              readOnly
            />
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <b>Film Connection</b>
        </div>
        <DetailsList
          items={data?.planet.filmConnection.films}
          columns={columns}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
      </form>
    </Panel>
  );
};
