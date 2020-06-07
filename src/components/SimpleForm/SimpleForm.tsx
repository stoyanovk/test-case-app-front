import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SimpleForm() {
  return (
    <form>
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
      />
    </form>
  );
}
