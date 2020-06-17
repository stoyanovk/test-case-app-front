import React from "react";
import { Paper, Box, Button, Typography } from "@material-ui/core";
type deleteModalLayout = {
  label: string;
  onClose: () => void;
  actionCreator: () => void;
};
export default function DeleteModalLayout({
  label,
  onClose,
  actionCreator,
}: deleteModalLayout) {
  return (
    <Paper>
      <Box p={5}>
        <Box mb={3}>
          <Typography variant="h5">
            Do you really want to delete the <b>"{label}"</b>
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Box mx={2}>
            <Button variant="contained" color="primary" onClick={actionCreator}>
              delete
            </Button>
          </Box>
          <Box mx={2}>
            <Button color="default" variant="contained" onClick={onClose}>
              close
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
