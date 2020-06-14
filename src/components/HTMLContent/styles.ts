import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      "@global": {
        ul: {
          paddingLeft: theme.spacing(3),
        },
        ol: {
          paddingLeft: theme.spacing(3),
        },
        li: {
          padding: theme.spacing(1),
          lineHeight: "30px",
        },
        p: {
          padding: theme.spacing(1),
          lineHeight: "30px",
        },
      },
    },
  })
);

export default useStyles;
