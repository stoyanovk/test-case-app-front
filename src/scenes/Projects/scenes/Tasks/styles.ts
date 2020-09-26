import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    listItem: {
      padding: "10px 15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
        color: "#fff",
      },
    },
    paper: { minHeight: "calc(100% - 48px)" },
    icon: {
      marginLeft: 16,
      fontSize: 24,
      cursor: "pointer",
      transition: "0.3s ease-in-out",
      textDecoration: "none",
      "&:hover": {
        transform: "scale(1.3)",
      },
    },
  })
);
export default useStyles;
