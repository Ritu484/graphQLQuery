import * as React from "react";
import { createListItems } from "@fluentui/example-data";
import { IPlanet } from "../planets/list/types";
import {
  IColumn,
  buildColumns,
  SelectionMode,
  Toggle,
  IListProps,
  Stack,
} from "@fluentui/react";
import { ShimmeredDetailsList } from "@fluentui/react/lib/ShimmeredDetailsList";
import { useSetInterval, useConst } from "@fluentui/react-hooks";

interface IShimmerApplicationExampleState {
  lastIntervalId: number;
  visibleCount: number;
}

const ITEMS_COUNT: number = 200;
const INTERVAL_DELAY: number = 1200;
const toggleStyle: React.CSSProperties = {
  marginBottom: "20px",
};
const shimmeredDetailsListProps: IListProps = {
  renderedWindowsAhead: 0,
  renderedWindowsBehind: 0,
};

const LoadingScreen: React.FunctionComponent = () => {
  const { current: state } = React.useRef<IShimmerApplicationExampleState>({
    lastIntervalId: 0,
    visibleCount: 0,
  });

  const [items, setItems] = React.useState<(IPlanet | null)[] | undefined>(
    undefined
  );

  const shimmerColumns: IColumn[] = useConst(() => {
    const currentItems = createListItems(1);
    const columns: IColumn[] = buildColumns(currentItems);
    for (const column of columns) {
      column.name = "...";
      column.minWidth = 16;
      column.maxWidth = 100;
      //column.isIconOnly = true;
      // column.iconName = "Page";
    }
    return columns;
  });

  return (
    <>
      <Stack style={{ height: "100vh", width: "100vw" }}>
        <ShimmeredDetailsList
          setKey="items"
          items={items || []}
          columns={shimmerColumns}
          selectionMode={SelectionMode.none}
          enableShimmer={!items}
          ariaLabelForShimmer="Content is being fetched"
          ariaLabelForGrid="Item details"
          listProps={shimmeredDetailsListProps}
        />
      </Stack>
    </>
  );
};
export default LoadingScreen;
