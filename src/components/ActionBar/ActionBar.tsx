import React from "react";
import { Box, Paper } from "@material-ui/core";

export default function ActionBar({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <Box mt={2}>
      <Paper>
        <Box p={2} display="flex" justifyContent="flex-end">
          {children}
        </Box>
      </Paper>
    </Box>
  );
}
