import { Box, Divider, Typography } from '@mui/material'

interface SectionProps {
  title: string
  id?: string
  children?: React.ReactNode
}

const Section = (props: SectionProps) => {
  return (
    <Box
      component="section"
      id={props.id}
      sx={{
        py: 4,
        px: { xs: 2, sm: '10%', md: '5%', lg: '20%' },
        textAlign: 'center',
      }}
    >
      <Typography variant="h2">
        {props.title}
      </Typography>

      <Divider
        sx={{
          width: '70%',
          mx: 'auto',
          my: 2,
        }}
      />

      <Box mt={3}>
        {props.children}
      </Box>
    </Box>
  )
}

export default Section