import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    button: {
      marginTop: "auto",
      padding: "7px 15px",
      color: "#fff",
      border: "1px solid #fff",
    },
    listItem: {
      cursor: "pointer",
      "&:hover": {
        background: theme.palette.primary.main,
        color: "#fff",
      },
    },
    list: {
      overflowY: "auto",
    },
  })
);

export default useStyles;
