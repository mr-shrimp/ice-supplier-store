import Section from '../Section'
import ContactUsForm from '../Forms/ContactUsForm'
import { Stack, Divider } from '@mui/material'
import ContactUsPaper from '../ContactUsPaper'

const GetInTouch = () => {
  return (
    <Section title="Get In Touch" id="section-get-in-touch">
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        spacing={4}
        width="100%"
      >
        <ContactUsPaper />
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
        </Divider>

        <ContactUsForm />
      </Stack>
    </Section>
  )
}

export default GetInTouch
