import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      textTransform: "uppercase",
      fontSize: "14px",
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      transition: "0.3s ease-in-out",
      "&:active": {
        transform: "scale(0.9)",
      },
    },
  })
);

export default useStyles;
