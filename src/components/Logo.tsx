import { Box, Stack, Typography } from '@mui/material'
import projectSettings from '../../project-settings.json'
import logo from '/logo.svg'

const Logo = ({
    logoSize = 50,
    fontSize = 24,
}) => {
    return (
        <Stack direction="row" alignItems={"center"} gap={2} sx={{
            paddingBlock: { xs: 1, lg: 0 },
        }}>
            <Box><img src={logo} alt="Logo" style={{ aspectRatio: "1/1", height: logoSize }} /></Box>
            <Box>
                <Typography variant="h1" fontSize={fontSize} fontWeight={700}>
                    {projectSettings.name}
                </Typography>
            </Box>
        </Stack>
    )
}

export default Logo
