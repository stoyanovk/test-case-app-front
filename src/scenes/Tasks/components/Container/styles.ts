import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
  },
  sidebar: {
    width: "200px",
  },
  paper: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    padding: "5px",
    display: "block",
  },
  active: {
    backgroundColor: theme.palette.secondary.dark,
    color: "#fff",
  },
}));
export default useStyles;
