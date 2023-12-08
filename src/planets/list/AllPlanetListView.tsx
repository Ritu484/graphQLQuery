import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { IPlanet } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { columns } from "./columns.data";
import { AllPlanets } from "./query";
import { Outlet } from "react-router-dom";

const AllPlanetListView: React.FunctionComponent = () => {

 
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
          <div>
            {item.terrains.map((value: string, index: number) =>
              index < item.terrains.length - 1 ? value + "," : value
            )}
          </div>
        );
      default:
        return <span>{fieldContent}</span>;
    }
  }
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div style={{ display: "flex" }}>
      <DetailsList
        items={data.allPlanets.planets}
        columns={columns}
        onRenderItemColumn={renderItemColumn}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.fixedColumns}
        constrainMode={ConstrainMode.unconstrained}
        isHeaderVisible={true}
      />
      <Outlet />
    </div>
  );
};
export default AllPlanetListView;
