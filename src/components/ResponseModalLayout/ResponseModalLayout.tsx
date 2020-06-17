import React from "react";
import { Paper, Box, Button, Typography } from "@material-ui/core";
type deleteModalLayout = {
  message: string;
  onClose: () => void;
};
export default function ResponseModalLayout({
  message,
  onClose,
}: deleteModalLayout) {
  return (
    <Paper>
      <Box p={5}>
        <Box mb={3}>
          <Typography variant="h5">{message}</Typography>
        </Box>
        <Box display="flex" justifyContent="center">
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
