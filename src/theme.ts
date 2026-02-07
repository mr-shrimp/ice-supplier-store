import { createTheme } from '@mui/material/styles';
import projectSettings from '../project-settings.json'

const headersFont = "Montserrat, sans-serif";
const bodyFont = "Hind Siliguri, sans-serif";

const theme = createTheme({
    palette: {
        primary: {
            main: projectSettings.theme.primaryColor,
        },
        secondary: {
            main: projectSettings.theme.secondaryColor
        }
    },
    shape: {
        borderRadius: 0,
    },
    typography: {
        fontFamily: [
            'Hind Siliguri',
            'Arial',
            'sans-serif'
        ].join(','),
        h1: {
            fontFamily: headersFont,

        },
        h2: {
            fontFamily: headersFont,
            fontSize: '2rem',
        },
        h3 : {
            fontFamily: headersFont,
            fontSize: '1rem',
        },
        body1: {
            fontFamily: bodyFont,
            fontSize: '1rem',
        },
        body2: {
            fontFamily: bodyFont,
            fontSize: '0.875rem',
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    color: projectSettings.theme.secondaryColor,
                    textDecoration: "none",
                    '&:hover' : {
                        textDecoration: "underline"
                    }
                }
            }
        }
    }
})

export default theme;