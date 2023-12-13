import { useNavigate, Outlet } from "react-router-dom";

import { format, parseISO } from "date-fns";
import { useQuery } from "@apollo/client";
import { Link } from "@fluentui/react/lib/Link";
import { ProgressIndicator } from "@fluentui/react/lib/ProgressIndicator";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  ConstrainMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { Stack } from "@fluentui/react";

import { ISpecies } from "./types";
import { columnsAllSpecies } from "./columns.data";
import { AllSpecies } from "./query";
import ColoredEyeComponent from "./ColoredEyeComponent";
import { useStyles } from "./index.styles";
import { ColumnsDisplay } from "./ColumnsDisplay";

const AllSpeciesListView: React.FunctionComponent = () => {
  const styles = useStyles();
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(AllSpecies);
  function renderItemColumn(
    item: ISpecies,
    index: number | undefined,
    column: IColumn | undefined
  )
  
  {
        return <ColumnsDisplay item={item} columnKey={column?.key} />;

    // const fieldContent = item[column?.fieldName as keyof ISpecies] as string;

    // switch (column?.key) {
    //   case "classification":
    //     return (
    //       <Link
    //         onClick={() => {
    //           navigate(`/species/species-view/?speciesId=${item.id}`);
    //         }}
    //       >
    //         {item.classification}
    //       </Link>
    //     );
    //   case "eyeColors":
    //     return (
    //       <Stack horizontal tokens={{ childrenGap: 10 }}>
    //         {item.eyeColors.map((value: string, index: number) =>
    //           // index < item.eyeColors.length - 1 ? value + "," : value
    //           {
    //             return (
    //               <Stack>
    //                 <ColoredEyeComponent color={value} />
    //               </Stack>
    //             );
    //           }
    //         )}
    //       </Stack>
    //     );

    //   case "created":
    //     let deadlineDate = parseISO(fieldContent);
    //     return (
    //       <span>{format(deadlineDate, `yyyy/MM/dd HH:mm:ss`).toString()}</span>
    //     );
    //   default:
    //     return <span>{fieldContent}</span>;
    // }
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
          items={data.allSpecies.species}
          columns={columnsAllSpecies}
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
export default AllSpeciesListView;
