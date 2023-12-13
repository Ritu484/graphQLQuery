import React, { useEffect } from "react";

import { useForm } from "react-hook-form";
import { useQueryParam, StringParam } from "use-query-params";
import { Stack } from "@fluentui/react";
import { Label } from "@fluentui/react/lib/Label";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";
import { useQuery } from "@apollo/client";

import { SpeciesView } from "./types";
import { Species } from "./query";
import { columnsSpeciesDetailView } from "./columns.data";
import { ControlledTextField } from "../../components/ControlledTextField";
import CustomPanelHeader from "../../components/CustomPanelHeader";
import LoadingScreen from "../../components/LoadingScreen";

const PlanetPanelComponent: React.FunctionComponent = () => {
  const [speciesId] = useQueryParam("speciesId", StringParam);
  const { reset, control } = useForm();
  const { loading, error, data } = useQuery(Species, {
    variables: { speciesId: speciesId },
  });

  const onRenderCustomHeader = () => {
    return <CustomPanelHeader title="Species Details" navigateTo="/species" />;
  };

  function renderItemColumn(
    item: SpeciesView,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    const fieldContent = item[column?.key as keyof SpeciesView] as string;

    switch (column?.key) {
      default:
        return <span>{fieldContent}</span>;
    }
  }
  useEffect(() => {
    reset({
      classification: data?.species.classification,
      created: data?.species.created,
      edited: data?.species.edited,
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
    if (loading)
      return (
        <Panel type={PanelType.large} isBlocking={false}>
          <LoadingScreen />
        </Panel>
      );
    if (error)
      return (
        <Panel type={PanelType.large} isBlocking={false}>
          <p>Error : {error.message}</p>
        </Panel>
      );

  return (
    <Panel
      onRenderHeader={onRenderCustomHeader}
      type={PanelType.large}
      isOpen={true}
      hasCloseButton={false}
      isBlocking={false}
    >
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
              <ControlledTextField
                label="Created"
                control={control}
                name="created"
                converToDate={true}
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
                converToDate={true}
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
