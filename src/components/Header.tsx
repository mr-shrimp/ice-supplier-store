import { Box,useTheme } from '@mui/material'
import Logo from './Logo'

const Header = () => {
    const theme = useTheme()

    return (
        <Box
            component="header"
            display="flex"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems="center"
            sx={{
                paddingBlock: { xs: 0, lg: "10px" },
                paddingInline: { xs: 2, lg: 8 },
                backgroundColor: theme.palette.primary.main,
                position: "sticky",
                top: 0,
                zIndex: 1000,
                color: "#fff",
            }}
        >
           <Logo />
        </Box>
    )
}

export default Header
