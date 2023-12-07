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
import { Species } from "../../../graphQL/Queries";
import { ControlledTextField } from "../../../components/ControlledTextField";
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

export const SpeciesPanelComponent: React.FunctionComponent<IMyProps> = ({
  recordID,
  isOpen,
  setIsOpen,
}) => {
  const { reset, control } = useForm();

  // const [isOpen, setIsOpen] = React.useState(true);
  const { loading, error, data } = useQuery(Species, {
    variables: { speciesId: recordID },
  });
  console.log(JSON.stringify(data?.species?.homeworld?.name));
  let columns: IColumn[] = [
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
        <div style={{ whiteSpace: "pre-wrap" }}>
          {item.producers.map((value: string, index: number) =>
            index < item.producers.length - 1 ? value + "," : value
          )}
        </div>
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
    {
      key: "title",
      name: "title",
      minWidth: 50,
      maxWidth: 200,
      isResizable: true,
      onRender: (item) => (
        // eslint-disable-next-line react/jsx-no-bind
        <div> {item.title}</div>
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
  ];

  useEffect(() => {
    reset({
      classification: data?.species.classification,
      created: data?.species.created,
      averageHeight: data?.species.averageHeight,
      averageLifespan: data?.species.averageLifespan,
      designation: data?.species.designation,
      hairColors: data?.species.hairColors,
      homeName: data?.species?.homeworld?.name,
      terrains: data?.species?.homeworld?.terrains,
      surfaceWater: data?.species?.homeworld?.surfaceWater,
      rotationPeriod: data?.species?.homeworld?.rotationPeriod,
      population: data?.species?.homeworld?.population,
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
        <DocumentCardTitle title={"Species Details"} />
      </DocumentCard>
      <form>
        <ControlledTextField
          label="classification"
          control={control}
          name="classification"
          readOnly
        />
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              {" "}
              <ControlledTextField
                label="created"
                control={control}
                name="created"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              {" "}
              <ControlledTextField
                label="averageHeight"
                control={control}
                name="averageHeight"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="averageLifespan"
                control={control}
                name="averageLifespan"
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
          items={data?.species.filmConnection.films}
          columns={columns}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
        <Label>Home World</Label>
        <ControlledTextField
          label="Name"
          control={control}
          name="homeName"
          readOnly
        />
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="Population"
                control={control}
                name="population"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="terrains"
                control={control}
                name="terrains"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              <ControlledTextField
                label="surfaceWater"
                control={control}
                name="surfaceWater"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="rotationPeriod"
                control={control}
                name="rotationPeriod"
                readOnly
              />
            </span>
          </Stack.Item>
        </Stack>
      </form>
    </Panel>
  );
};
