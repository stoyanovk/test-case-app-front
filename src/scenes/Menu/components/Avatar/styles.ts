import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      backgroundColor: theme.palette.primary.main,
    },
    email: {
      fontSize: "10px",
    },
  })
);
export default useStyles;
