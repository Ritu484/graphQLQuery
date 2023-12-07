import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Stack } from "@fluentui/react";
import { Label } from "@fluentui/react/lib/Label";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from "@fluentui/react/lib/DocumentCard";
import { useQuery } from "@apollo/client";
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

    {
      key: "director",
      name: "director",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.director}</div>
      ),
    } as IColumn,
    {
      key: "producers",
      name: "producers",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.director}</div>
      ),
    } as IColumn,
    {
      key: "releaseDate",
      name: "releaseDate",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.releaseDate}</div>
      ),
    } as IColumn,
  ];
  //columnsResidents
  let columnsResidents: IColumn[] = [
    {
      key: "edited",
      name: "edited",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.edited}</div>
      ),
    } as IColumn,
    {
      key: "created",
      name: "created",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.created}</div>
      ),
    } as IColumn,
    {
      key: "birthYear",
      name: "birthYear",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.birthYear}</div>
      ),
    } as IColumn,
    {
      key: "height",
      name: "height",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.height}</div>
      ),
    } as IColumn,
    {
      key: "mass",
      name: "mass",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.mass}</div>
      ),
    } as IColumn,
    {
      key: "name",
      name: "name",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.name}</div>
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
      type={PanelType.large}
      // customWidth="800px"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      closeButtonAriaLabel="Close"
    >
      <DocumentCard
        style={{
          display: "flex",
          minWidth: "100%",
          justifyContent: "center",
        }}
      >
        <DocumentCardTitle title={"Planet Details"} />
      </DocumentCard>
      <form>
        <ControlledTextField
          label="Name"
          control={control}
          name="name"
          readOnly
        />
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              {" "}
              <ControlledTextField
                label="Climates"
                control={control}
                name="climates"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              {" "}
              <ControlledTextField
                label="Gravity"
                control={control}
                name="gravity"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>

        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="Population"
                control={control}
                name="Population"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="Rotation Period"
                control={control}
                name="rotationPeriod"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="Terrains"
                control={control}
                name="terrains"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="Surface Water"
                control={control}
                name="surfaceWater"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>

        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="diameter"
                control={control}
                name="diameter"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="created"
                control={control}
                name="created"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="orbitalPeriod"
                control={control}
                name="orbitalPeriod"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="edited"
                control={control}
                name="edited"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
        <Label>Film Connection</Label>
        <DetailsList
          items={data?.planet.filmConnection.films}
          columns={columns}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
        <Label>Resident Connection</Label>
        <DetailsList
          items={data?.planet.residentConnection.residents}
          columns={columnsResidents}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
      </form>
    </Panel>
  );
};
