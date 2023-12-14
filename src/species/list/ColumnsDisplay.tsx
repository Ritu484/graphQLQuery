import { useNavigate, Outlet } from "react-router-dom";
import { ISpecies } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { Stack } from "@fluentui/react";
import ColoredEyeComponent from "./ColoredEyeComponent";
import { formatDate } from "../../utility";

type Props = {
  item: ISpecies;
  columnKey: string | undefined;
};

export const ColumnsDisplay = (props: Props) => {
  const { item, columnKey } = props;
  const fieldContent = item[columnKey as keyof ISpecies] as string;
  let navigate = useNavigate();
  switch (columnKey) {
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
    case "created":
    case "edited":
      return <span>{formatDate(fieldContent)}</span>;
    case "averageLifespan":
    case "averageHeight":
      return <Stack style={{ alignItems: "center" }}>{fieldContent}</Stack>;
    default:
      return <span>{fieldContent}</span>;
  }
};
