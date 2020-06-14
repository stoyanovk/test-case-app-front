import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      height: "100%",
    },
    paper: { height: "calc(100% - 48px)" },
    content: {
      height: "calc(100% - 48px)",
    },
  })
);

export default useStyles;
