import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      backgroundColor: theme.palette.secondary.dark,
    },
    email: {
      fontSize: "10px",
    },
  })
);
export default useStyles;
