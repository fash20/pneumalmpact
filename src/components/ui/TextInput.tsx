import { InputLabel, TextField } from "@material-ui/core";
import { TextFieldProps } from "@mui/material";
import React, { useId } from "react";

interface Prop {
  label?: string;
  ContainerClassName?: string;
  TextFieldClassName?: string;
  type?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): any
}
const TextInput = ({
  label,
  ContainerClassName,
  TextFieldClassName,
  type,
  onChange
}: Prop) => {
  const id = useId();
  return (
    <div className={`grid grid-cols-1 gap-2 m-2 font-inter` + ContainerClassName}>
      <InputLabel htmlFor={label + id}>{label}</InputLabel>
      <TextField
        variant="outlined"
        type={type || "text"}
        size='small'
        // className={`border-[1px] ${TextFieldClassName}`}
        style={{ borderRadius: "12px" }}
        placeholder={label}
        id={label + id}
        onChange ={onChange}
      />
    </div>
  );
};

export default TextInput;
