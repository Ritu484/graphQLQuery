import { Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
  IDetailsListStyles,
  IDetailsHeaderProps,
  IDetailsColumnRenderTooltipProps,
  IDetailsFooterProps,
  DetailsRow,
} from "@fluentui/react/lib/DetailsList";
import { IRenderFunction, Stack, TooltipHost } from "@fluentui/react";

import { ISpecies } from "./types";
import { columnsAllSpecies } from "./columns.data";
import { AllSpecies } from "./query";
import { useStyles } from "./index.styles";
import { ColumnsDisplay } from "./ColumnsDisplay";
import LoadingScreen from "../../components/LoadingScreen";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (
  props,
  defaultRender
) => {
  if (!props) {
    return null;
  }
  const onRenderColumnHeaderTooltip: IRenderFunction<
    IDetailsColumnRenderTooltipProps
  > = (tooltipHostProps) => <TooltipHost {...tooltipHostProps} />;
  return defaultRender!({
    ...props,
    onRenderColumnHeaderTooltip,
  });
};
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

const AllSpeciesListView: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(AllSpecies);
  function renderItemColumn(
    item: ISpecies,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    return <ColumnsDisplay item={item} columnKey={column?.key} />;
  }

  if (error) return <p>Error : {error.message}</p>;

  return (
    <Stack>
      {loading ? (
        <LoadingScreen />
      ) : (
        <DetailsList
          items={data.allSpecies.species}
          columns={columnsAllSpecies}
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
export default AllSpeciesListView;
