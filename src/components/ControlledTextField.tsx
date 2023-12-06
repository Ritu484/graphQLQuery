import { Controller } from "react-hook-form";
import { TextField } from "@fluentui/react/lib/TextField";

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
          value={value}
          onBlur={onBlur}
          name={fieldName}
          errorMessage={error && error.message}
        />
      )}
    />
  );
};
