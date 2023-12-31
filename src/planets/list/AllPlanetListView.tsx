import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
  IDetailsHeaderProps,
  DetailsHeader,
  IDetailsListStyles,
} from "@fluentui/react/lib/DetailsList";
import { IPlanet } from "./types";
import { columns } from "./columns.data";
import { AllPlanets } from "./query";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { Stack } from "@fluentui/react";
import { ColumnsDisplay } from "./ColumnsDisplay";
import LoadingScreen from "../../components/LoadingScreen";

const gridStyles: Partial<IDetailsListStyles> = {
  headerWrapper: {
    position: "fixed",
    left: 200,
    top: 50,
  },
  contentWrapper: {
    position: "fixed",
    left: 200,
    top: 120,
    right: 0,
    bottom: 0,
    overflow: "scroll",
  },
};
const AllPlanetListView: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(AllPlanets);

  function renderItemColumn(
    item: IPlanet,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    return <ColumnsDisplay item={item} columnKey={column?.key} />;
  }

  if (error)
    return (
      <Panel type={PanelType.large} isBlocking={true}>
        <p>Error : {error.message}</p>
      </Panel>
    );
  return (
    <Stack>
      {loading ? (
        <LoadingScreen />
      ) : (
        <DetailsList
          items={data.allPlanets.planets}
          columns={columns}
          onRenderItemColumn={renderItemColumn}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
          styles={gridStyles}
        />
      )}
      <Outlet />
    </Stack>
  );
};
export default AllPlanetListView;
