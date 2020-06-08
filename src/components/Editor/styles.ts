import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      backgroundColor: theme.palette.primary.main,
    },
    editor: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

export default useStyles;
