import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#eeeeee',
            light: '#ffffff',
            dark: '#bcbcbc'
        },
        secondary: {
            main: '#19857b',
            dark: '#000'
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;