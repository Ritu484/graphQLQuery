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

const AllPlanetListView: React.FunctionComponent = () => {
  const styles = useStyles();

  let navigate = useNavigate();
  const { loading, error, data } = useQuery(AllPlanets);
  function renderItemColumn(
    item: IPlanet,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    const fieldContent = item[column?.fieldName as keyof IPlanet] as string;
    switch (column?.key) {
      case "name":
        return (
          <Link
            onClick={() => {
              navigate(`/planets/planet/?id=${item.id}`);
            }}
          >
            {item.name}
          </Link>
        );
      case "climates":
        return (
          <div>
            {item.climates.map((value: string, index: number) =>
              index < item.climates.length - 1 ? value + "," : value
            )}
          </div>
        );
      case "terrains":
        return (
          <Stack>
            {item.terrains.map((value: string, index: number) =>
              index < item.terrains.length - 1 ? value + "," : value
            )}
          </Stack>
        );
      default:
        return <span>{fieldContent}</span>;
    }
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
