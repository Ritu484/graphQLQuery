import * as React from "react";
import {
  Shimmer,
  ShimmerElementType,
  IShimmerElement,
  ThemeProvider,
  mergeStyles,
} from "@fluentui/react";
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
import { useConst } from "@fluentui/react-hooks";
const wrapperClass = mergeStyles({
  marginTop: 100,
  padding: 2,
  selectors: {
    "& > .ms-Shimmer-container": {
      margin: "10px 0",
    },
  },
});
const shimmerWithElementEmptyRow = [
  { type: ShimmerElementType.gap, width: "100%", height: 24 },
];
const shimmerWithElementHorizontalRow = [
  //{ type: ShimmerElementType.gap, width: "2%" ,height:100},
  // { type: ShimmerElementType.gap, width: "2%" },
  { type: ShimmerElementType.line, height: 20, width: "40%" },
  { type: ShimmerElementType.gap, width: "5%" },
  { type: ShimmerElementType.line, height: 20, width: "40%" },
];

const shimmeredDetailsListProps: IListProps = {
  renderedWindowsAhead: 0,
  renderedWindowsBehind: 0,
};

const LoadingScreenPanel: React.FunctionComponent = () => {
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
    }
    return columns;
  });
  return (
    <ThemeProvider className={wrapperClass}>
      <Shimmer
        shimmerElements={[
          { type: ShimmerElementType.line, height: 20, width: "100%" },
        ]}
      />
      <Shimmer shimmerElements={shimmerWithElementEmptyRow} />
      <Shimmer shimmerElements={shimmerWithElementHorizontalRow} />
      <Shimmer shimmerElements={shimmerWithElementEmptyRow} />
      <Shimmer shimmerElements={shimmerWithElementHorizontalRow} />
      <Shimmer shimmerElements={shimmerWithElementEmptyRow} />
      <Shimmer shimmerElements={shimmerWithElementHorizontalRow} />
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
    </ThemeProvider>
  );
};
export default LoadingScreenPanel;
