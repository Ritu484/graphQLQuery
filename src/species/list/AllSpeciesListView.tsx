import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { ISpecies } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { columnsAllSpecies } from "./columns.data";
import { AllSpecies } from "./query";
import { Outlet } from "react-router-dom";

const AllPlanetListView: React.FunctionComponent = () => {
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(AllSpecies);
  function renderItemColumn(
    item: ISpecies,
    index: number | undefined,
    column: IColumn | undefined
  ) {
    const fieldContent = item[column?.fieldName as keyof ISpecies] as string;

    switch (column?.key) {
      case "classification":
        return (
          <Link
            onClick={() => {
              navigate(`/species/species-view/?speciesId=${item.id}`);
            }}
          >
            {item.classification}
          </Link>
        );
      case "eyeColors":
        return (
          <div>
            {item.eyeColors.map((value: string, index: number) =>
              index < item.eyeColors.length - 1 ? value + "," : value
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
        items={data.allSpecies.species}
        columns={columnsAllSpecies}
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
