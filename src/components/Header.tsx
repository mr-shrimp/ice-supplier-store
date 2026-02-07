import { Box } from '@mui/material'
import logo from "/logo.jpg"

const Header = () => {
    return (
        <Box
            component="header"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                paddingBlock: { sm: "5px", lg: "10px" },
                backgroundColor: "rgba(0, 0, 0, 0.15)",
                position: "sticky",
                top: 0,
                zIndex: 1000
            }}
        >
            <img src={logo} alt="Logo" style={{ height: 100, width: 150 }} />
        </Box>
    )
}

export default Header
