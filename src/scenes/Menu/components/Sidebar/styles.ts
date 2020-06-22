import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    toolbar: theme.mixins.toolbar,
    button: {
      marginTop: "auto",
      padding: "7px 15px",
      color: "#fff",
      border: "1px solid #fff",
    },
    listItem: {
      color: theme.palette.text.primary,
      display: "block",
      textDecoration: "none",
      padding: "10px 5px",
      "&:hover": {
        background: theme.palette.secondary.dark,
        color: "#fff",
      },
    },
    list: {
      overflowY: "auto",
    },
  });
});

export default useStyles;
