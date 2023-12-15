import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

import { Planet } from "./query";
import { PlanetView } from "./types";
import { columnsFilmConnection, columnsResidents } from "./columns.data";
import { ControlledTextField } from "../../components/ControlledTextField";
import { useStyles } from "./index.styles";
import CustomPanelHeader from "../../components/CustomPanelHeader";
import LoadingScreen from "../../components/LoadingScreen";
import { formatDate } from "../../utility";
import { ColumnsDisplay } from "./ColumnsDisplay";

const PlanetPanelComponent: React.FunctionComponent = () => {
  const [id] = useQueryParam("id", StringParam);

  const styles = useStyles();
  let navigate = useNavigate();
  const { reset, control } = useForm();
  const { loading, error, data } = useQuery(Planet, {
    variables: { id: id },
  });

  const onRenderCustomHeader = () => {
    return <CustomPanelHeader title="Planet Details" navigateTo="/planets" />;
  };

  function renderItemColumn(
    item: PlanetView,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    return <ColumnsDisplay item={item} column={column} />;
  }
  useEffect(() => {
    reset({
      name: data?.planet.name,
      climates: data?.planet.climates,
      terrains: data?.planet.terrains,
      gravity: data?.planet.gravity,
      population: data?.planet.population,
      rotationPeriod: data?.planet.rotationPeriod,
      surfaceWater: data?.planet.surfaceWater,
      diameter: data?.planet.diameter,
      created: data?.planet.created,
      edited: data?.planet.edited,
      orbitalPeriod: data?.planet.orbitalPeriod,
      // diameter: data?.planet.diameter,
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
    <Stack style={{ position: "fixed", top: 0 }}>
      <Panel
        onRenderHeader={onRenderCustomHeader}
        type={PanelType.large}
        isOpen={true}
        hasCloseButton={false}
        isBlocking={false}
      >
        <Stack style={{ position: "relative", top: 80 }}>
          <form>
            <ControlledTextField
              label="Name"
              control={control}
              name="name"
              readOnly
            />
            <Stack horizontal style={{ marginTop: 16 }}>
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
            <Stack horizontal style={{ marginTop: 16 }}>
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
                    label="Rotation Period"
                    control={control}
                    name="rotationPeriod"
                    readOnly
                  />
                </span>
              </Stack.Item>
            </Stack>
            <Stack horizontal style={{ marginTop: 16 }}>
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
            <Stack horizontal style={{ marginTop: 16 }}>
              <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
                <span>
                  <ControlledTextField
                    label="Diameter"
                    control={control}
                    name="diameter"
                    readOnly
                  />
                </span>
              </Stack.Item>
              <Stack.Item align="auto" style={{ flex: 1 }}>
                <span>
                  <ControlledTextField
                    label="Created on"
                    control={control}
                    name="created"
                    converToDate={true}
                    readOnly
                  />
                </span>
              </Stack.Item>
            </Stack>
            <Stack horizontal style={{ marginTop: 16 }}>
              <Stack.Item align="auto" style={{ flex: 1, marginRight: 20 }}>
                <span>
                  <ControlledTextField
                    label="Orbital Period"
                    control={control}
                    name="orbitalPeriod"
                    readOnly
                  />
                </span>
              </Stack.Item>
              <Stack.Item align="auto" style={{ flex: 1 }}>
                <span>
                  <ControlledTextField
                    label="Edited on"
                    control={control}
                    name="edited"
                    converToDate
                    readOnly
                  />
                </span>
              </Stack.Item>
            </Stack>
            <Label style={{ marginTop: 16 }}>Film Connection</Label>
            <DetailsList
              items={data?.planet.filmConnection.films}
              columns={columnsFilmConnection}
              onRenderItemColumn={renderItemColumn}
              selectionMode={SelectionMode.none}
              layoutMode={DetailsListLayoutMode.fixedColumns}
              constrainMode={ConstrainMode.unconstrained}
              isHeaderVisible={true}
            />
            <Label style={{ marginTop: 16 }}>Resident Connection</Label>
            <Label>
              Total Count -{data?.planet.residentConnection.totalCount}
            </Label>
            <DetailsList
              items={data?.planet.residentConnection.residents}
              columns={columnsResidents}
              onRenderItemColumn={renderItemColumn}
              selectionMode={SelectionMode.none}
              layoutMode={DetailsListLayoutMode.fixedColumns}
              constrainMode={ConstrainMode.unconstrained}
              isHeaderVisible={true}
            />
          </form>
        </Stack>
      </Panel>
    </Stack>
  );
};
export default PlanetPanelComponent;
