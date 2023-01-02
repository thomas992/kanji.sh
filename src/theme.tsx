import { createTheme } from '@mui/material/styles';

const appTheme = createTheme({
    typography: {
        allVariants: {
            fontFamily: 'Montserrat, sans-serif'
        }
    },
    palette: {
        background: {
            default: '#FCFCFC',
            paper: '#FFFFFF'
        }
    }
});

export default appTheme;
