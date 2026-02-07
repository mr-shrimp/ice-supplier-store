import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{
        marginBlockStart: "100px",
        backgroundColor: "rgba(0, 0, 0, 1)",
        paddingBlock: "15px",
        paddingInline: {xs: "15px", sm: "30px", lg: "20%"},
        color: "white",
    }}>
        Footer
    </Box>
  )
}

export default Footer
