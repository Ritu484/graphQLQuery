import { useNavigate, Outlet } from "react-router-dom";
import { PlanetView } from "./types";
import { Link } from "@fluentui/react/lib/Link";
import { IColumn, Stack } from "@fluentui/react";
import { makeStyles } from "@fluentui/react";
import { useStyles } from "./index.styles";
import { formatDate } from "../../utility";

type Props = {
  item: PlanetView;
  column: IColumn | undefined;
};

export const ColumnsDisplay = (props: Props) => {
  const { item, column } = props;
  const styles = useStyles();
  const fieldContent = item[column?.key as keyof PlanetView] as string;
  switch (column?.key) {
    case "height":
    case "mass":
    case "episodeID":
      return <Stack style={{ alignItems: "center" }}>{fieldContent}</Stack>;
    case "created":
    case "edited":
      return <span>formatDate(fieldContent)</span>;
    case "producers":
      const fieldArrayContent = item[
        column?.key as keyof PlanetView
      ] as string[];
      return (
        <Stack className={styles.wrapContainer}>
          {fieldArrayContent.map((value: string, index: number) =>
            index < fieldContent.length - 1 ? value + ", " : value
          )}
        </Stack>
      );
    default:
      return <span>{fieldContent}</span>;
  }
};
