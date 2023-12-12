import { useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Link } from "@fluentui/react/lib/Link";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { ISpecies } from "./types";
import { columnsAllSpecies } from "./columns.data";
import { AllSpecies } from "./query";
import ColoredEyeComponent from "./ColoredEyeComponent";
import { Stack } from "@fluentui/react";

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
          <Stack horizontal tokens={{ childrenGap: 10 }}>
            {item.eyeColors.map((value: string, index: number) =>
              // index < item.eyeColors.length - 1 ? value + "," : value
              {
                return (
                  <Stack>
                    <ColoredEyeComponent color={value} />
                  </Stack>
                );
              }
            )}
          </Stack>
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
