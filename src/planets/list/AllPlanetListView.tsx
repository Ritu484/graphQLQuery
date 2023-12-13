import { useNavigate, Outlet } from "react-router-dom";
import { Link } from "@fluentui/react/lib/Link";
import { useQuery } from "@apollo/client";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";
import { IPlanet } from "./types";
import { columns } from "./columns.data";
import { AllPlanets } from "./query";
import { Stack } from "@fluentui/react";
import { useStyles } from "./index.styles";
import { ColumnsDisplay } from "./ColumnsDisplay";

const AllPlanetListView: React.FunctionComponent = () => {
  const styles = useStyles();
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(AllPlanets);
  function renderItemColumn(
    item: IPlanet,
    index: number | undefined,
    column: IColumn | undefined
  ) {
   
    return(<ColumnsDisplay item={item} columnKey={column?.key}/>);
    
  }
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Stack>
      {loading ? (
        <Stack className={styles.centeredContainer}>
          <ProgressIndicator description="Loading data" />
        </Stack>
      ) : (
        <DetailsList
          items={data.allPlanets.planets}
          columns={columns}
          onRenderItemColumn={renderItemColumn}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.fixedColumns}
          constrainMode={ConstrainMode.unconstrained}
          isHeaderVisible={true}
        />
      )}
      <Outlet />
    </Stack>
  );
};
export default AllPlanetListView;
