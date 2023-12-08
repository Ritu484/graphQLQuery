import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryParam, StringParam } from "use-query-params";
import { useForm } from "react-hook-form";
import { Stack } from "@fluentui/react";
import { Label } from "@fluentui/react/lib/Label";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { IExampleItem } from "@fluentui/example-data";
import {
  DocumentCard,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import { useQuery } from "@apollo/client";
import { Species } from "./query";
import { columnsSpeciesDetailView } from "./columns.data";
import { ControlledTextField } from "../../components/ControlledTextField";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";

const PlanetPanelComponent: React.FunctionComponent = () => {

  const [speciesId] = useQueryParam("speciesId", StringParam);
  let navigate = useNavigate();
  const { reset, control } = useForm();
  const { loading, error, data } = useQuery(Species, {
    variables: { speciesId: speciesId },
  });
  
  function renderItemColumn(
    item: IExampleItem,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    const fieldContent = item[column?.key as keyof IExampleItem] as string;

    switch (column?.key) {
      default:
        return <span>{fieldContent}</span>;
    }
  }
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
      isOpen={true}
      onDismiss={() => {
        // setIsOpen(false);
        navigate("/species");
      }}
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
          label="Classification"
          control={control}
          name="classification"
          readOnly
        />
        <Stack horizontal>
          <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
            <span>
              {" "}
              <ControlledTextField
                label="Created"
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
                label="Average Height"
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
                label="Average Life Span"
                control={control}
                name="averageLifespan"
                readOnly
              />
            </span>
          </Stack.Item>
          <Stack.Item align="auto" style={{ flex: 1 }}>
            <span>
              <ControlledTextField
                label="Edited"
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
          columns={columnsSpeciesDetailView}
          onRenderItemColumn={renderItemColumn}
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
                label="Terrains"
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
                label="Surface Water"
                control={control}
                name="surfaceWater"
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
      </form>
    </Panel>
  
  );
};
export default PlanetPanelComponent;
