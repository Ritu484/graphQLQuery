import * as React from "react";
import {
  makeStyles,
  mergeClasses,
  shorthands,
  tokens,
  useId,
  Input,
  Label,
} from "@fluentui/react-components";

// const useStyles = makeStyles({
//   base: {
//     display: "flex",
//     flexDirection: "column",
//     maxWidth: "400px",
//   },
//   field: {
//     display: "grid",
//     gridRowGap: tokens.spacingVerticalXXS,
//     marginTop: tokens.spacingVerticalMNudge,
//     ...shorthands.padding(tokens.spacingHorizontalMNudge),
//   },
//   filledLighter: {
//     backgroundColor: tokens.colorNeutralBackgroundInverted,
//     "> label": {
//       color: tokens.colorNeutralForegroundInverted2,
//     },
//   },
//   filledDarker: {
//     backgroundColor: tokens.colorNeutralBackgroundInverted,
//     "> label": {
//       color: tokens.colorNeutralForegroundInverted2,
//     },
//   },
// });

const Test2: React.FunctionComponent = () => {
  const outlineId = useId("input-outline");
 

  return (
    <div >
      <div >
        {/* <Label htmlFor={outlineId}>Outline appearance (default)</Label> */}
        <Input appearance="outline" id={outlineId} />
      </div>
 </div>
  );
};
export default Test2
