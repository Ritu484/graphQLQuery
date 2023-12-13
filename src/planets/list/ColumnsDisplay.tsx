import { useNavigate, Outlet } from "react-router-dom";
import { IPlanet } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { Stack } from "@fluentui/react";

type Props = {
  item: IPlanet;
  columnKey: string | undefined;
};

export const ColumnsDisplay = (props: Props) => {
  const { item, columnKey } = props;
  const fieldContent = item[columnKey as keyof IPlanet] as string;
  let navigate = useNavigate();

  switch (columnKey) {
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
        <Stack>
          {item.climates.map((value: string, index: number) =>
            index < item.climates.length - 1 ? value + "," : value
          )}
        </Stack>
      );
    case "terrains":
      return (
        <Stack
          style={{
            display: "flex",
            flexWrap: "wrap",
            wordBreak: "break-all",
            whiteSpace: "break-spaces",
          }}
        >
          {item.terrains.map((value: string, index: number) =>
            index < item.terrains.length - 1 ? value + "," : value
          )}
        </Stack>
      );
    default:
      return (
        <div
          style={{ display: "flex", flexWrap: "wrap", wordBreak: "break-word" }}
        >
          {fieldContent}
        </div>
      );
  }
};
