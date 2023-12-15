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
} from "@fluentui/react/lib/DetailsList";
import { Stack } from "@fluentui/react";

import { ISpecies } from "./types";
import { columnsAllSpecies } from "./columns.data";
import { AllSpecies } from "./query";
import { useStyles } from "./index.styles";
import { ColumnsDisplay } from "./ColumnsDisplay";
import LoadingScreen from "../../components/LoadingScreen";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";


const AllSpeciesListView: React.FunctionComponent = () => {
  const styles = useStyles();
  const { loading, error, data } = useQuery(AllSpecies);
  function renderItemColumn(
    item: ISpecies,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    return <ColumnsDisplay item={item} columnKey={column?.key} />;
  }
const gridStyles: Partial<IDetailsListStyles> = {
  root: {
   // overflowX: "scroll",
    selectors: {
      "& [role=grid]": {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        height: "60vh",
      },
    },
  },
  headerWrapper: {
    flex: "0 0 auto",
  },
  contentWrapper: {
    flex: "1 1 auto",
   // overflow: "hidden",
  },
};

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
