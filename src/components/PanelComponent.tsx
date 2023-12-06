import * as React from "react";
import { useForm } from "react-hook-form";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { useQuery } from "@apollo/client";
import {
  makeStyles,
  shorthands,
  useId,
  Input,
  Label,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import type { LabelProps, InputProps } from "@fluentui/react-components";
import { Planet } from "../graphQL/Queries";
interface IMyProps {
  recordID: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "row",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
    //maxWidth: "800px",
  },
  card: {
    ...shorthands.margin("auto"),
    width: "720px",
    maxWidth: "100%",
  },
});
export const PanelComponent: React.FunctionComponent<IMyProps> = ({
  recordID,
  isOpen,
  setIsOpen,
}) => {
  const styles = useStyles();
  const inputId = useId("input-outline");
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: recordID,
    },
  });

  // const [isOpen, setIsOpen] = React.useState(true);
  const { loading, error, data } = useQuery(Planet, {
    variables: { id: recordID },
  });
  console.log(JSON.stringify(data));
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Panel
      headerText="Sample panel"
      type={PanelType.large}
      customWidth="800px"
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      closeButtonAriaLabel="Close"
    >
      {/* <p>{props.myValue}</p> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.root}>
          <Label>This is a label</Label>
          <Card className={styles.card}>
            <Input appearance="outline" id={inputId} />
          </Card>
        </div>
      </form>
    </Panel>
  );
};
