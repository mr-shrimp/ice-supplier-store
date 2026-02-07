import { createTheme } from '@mui/material/styles';

const headersFont = "Montserrat, sans-serif";
const bodyFont = "Hind Siliguri, sans-serif";

const theme = createTheme({
    typography: {
        fontFamily: [
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
        body1: {
            fontFamily: bodyFont,
            fontSize: '1rem',
        },
        body2: {
            fontFamily: bodyFont,
            fontSize: '0.875rem',
        }
    },
})

export default theme;