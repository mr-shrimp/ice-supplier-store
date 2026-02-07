import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import Logo from './Logo'
import projectSettings from '../../project-settings.json'

const Footer = () => {
  const theme = useTheme()
  return (
    <Box sx={{
      marginBlockStart: "100px",
      backgroundColor: theme.palette.primary.main,
      paddingBlockStart: 5,
      paddingInline: { xs: "15px", sm: "10%", md: "5%", lg: "20%" },
      color: "white",
    }}>
      Footer
      <Divider sx={{ backgroundColor: "white", marginBlockStart: "10px" }} />
      <Stack marginBlockStart={3} flexDirection={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between" gap={{ xs: 0, sm: 0 }}>
        <Logo logoSize={30} fontSize={15} />
        <Typography variant="body2" marginBlockStart={1}>
          &copy; {new Date().getFullYear()} {` ${projectSettings.name}. All rights reserved.`}
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
