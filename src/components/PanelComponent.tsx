import React,{useEffect}  from "react";
import { useForm, Controller } from "react-hook-form";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { TextField, MaskedTextField } from "@fluentui/react/lib/TextField";
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
import { ControlledTextField } from "./ControlledTextField";
interface IMyProps {
  recordID: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const useStyles = makeStyles({
  root: {
    // Stack the label above the field
    display: "flex",
    flexDirection: "column",
    // Use 2px gap below the label (per the design system)
    ...shorthands.gap("2px"),
    // Prevent the example from taking the full width of the page (optional)
    //maxWidth: "800px",
  },
  card: {
    height: "30px",
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
  const { reset, control } = useForm({
    defaultValues: {
      name: recordID,
    },
  });

  // const [isOpen, setIsOpen] = React.useState(true);
  const { loading, error, data } = useQuery(Planet, {
    variables: { id: recordID },
  });
  console.log(JSON.stringify(data));
 
  useEffect(() => {
    reset({ name: data?.planet.id});
  }, [data]);
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
      <form>
        <div className={styles.root}>
          <Label>Name</Label>
          {/* <Card>
            <Input
              appearance="outline"
              id={inputId}
              disabled
              autoFocus={false}
            />
          </Card> */}
          <ControlledTextField
            required={true}
            label="This is required field"
            control={control}
            name={"name"}
            rules={{ required: "This field is required" }}
          />
        </div>
      </form>
    </Panel>
  );
};
