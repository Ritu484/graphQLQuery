import { Controller } from "react-hook-form";
import { TextField } from "@fluentui/react/lib/TextField";
import { formatDate } from "../utility";

export const ControlledTextField = (
  props:any
) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      defaultValue={props.defaultValue || ""}
      render={({
        field: { onChange, onBlur, name: fieldName, value },
        fieldState: { error },
      }) => (
        <TextField
          {...props}
          onChange={onChange}
          value={props.converToDate ? formatDate(value) : value}
          onBlur={onBlur}
          name={fieldName}
          errorMessage={error && error.message}
        />
      )}
    />
  );
};
