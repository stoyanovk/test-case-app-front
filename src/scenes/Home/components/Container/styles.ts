import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      height: "100%",
    },
    paper: { minHeight: "calc(100% - 48px)" },
    content: {
      minHeight: "calc(100% - 48px)",
    },
  })
);

export default useStyles;
