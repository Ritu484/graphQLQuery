import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQueryParam, StringParam } from "use-query-params";
import { Stack } from "@fluentui/react";
import { Label } from "@fluentui/react/lib/Label";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { PlanetView } from "./types";
import {
  DocumentCard,
  DocumentCardTitle,
} from "@fluentui/react/lib/DocumentCard";
import {
  DetailsList,
  IColumn,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
} from "@fluentui/react/lib/DetailsList";
import { useQuery } from "@apollo/client";
import { Planet } from "./query";
import { columnsFilmConnection, columnsResidents } from "./columns.data";
import { ControlledTextField } from "../../components/ControlledTextField";


const PlanetPanelComponent: React.FunctionComponent = () => {
  const [id] = useQueryParam('id', StringParam);
  let navigate = useNavigate();
  const { reset, control } = useForm();
  const { loading, error, data } = useQuery(Planet, {
    variables: { id: id },
  });
  //console.log(JSON.stringify(data?.planet.filmConnection.films));

  //columnsResidents

  function renderItemColumn(
    item: PlanetView,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    const fieldContent = item[column?.key as keyof PlanetView] as string;

    switch (column?.key) {
      default:
        return <span>{fieldContent}</span>;
    }
  }
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
      isOpen={true}
      onDismiss={() => {
        navigate("/planets");
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
                label="Created"
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
          items={data?.planet.filmConnection.films}
          columns={columnsFilmConnection}
          onRenderItemColumn={renderItemColumn}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
        <Label>Resident Connection</Label>
        <Label>Total Count -{data?.planet.residentConnection.totalCount}</Label>
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
    </Panel>
  );
};
export default PlanetPanelComponent;
