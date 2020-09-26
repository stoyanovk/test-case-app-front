import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainIsAuth: {
      padding: "80px 15px 0 255px",
    },
    main: {
      padding: 0,
    },
  })
);

export default useStyles;
