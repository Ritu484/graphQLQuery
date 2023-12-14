import { useNavigate, Outlet } from "react-router-dom";
import { IPlanet } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react";
import { useStyles } from "./index.styles";

type Props = {
  item: IPlanet;
  columnKey: string | undefined;
};

export const ColumnsDisplay = (props: Props) => {
  const { item, columnKey } = props;
  const styles = useStyles();
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
        <Stack className={styles.wrapContainer}>
          {item.terrains.map((value: string, index: number) =>
            index < item.terrains.length - 1 ? value + "," : value
          )}
        </Stack>
      );
    case "rotationPeriod":
    case "population":
    case "surfaceWater":
      return <Stack style={{ alignItems: "center" }}>{fieldContent}</Stack>;
    default:
      return <div className={styles.wrapContainer}>{fieldContent}</div>;
  }
};
