import { Button, TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const ContactUsForm = () => {
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="h6" mb={2}>
        Contact Us
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
        />

        <TextField
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />

        <Button
          variant="contained"
          size="large"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </Box>
  )
}

export default ContactUsForm
