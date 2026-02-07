import Section from '../Section'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'
import { Box, Typography, useTheme } from '@mui/material'

const steps = [
  'Contact Us for a Quote',
  'Schedule Your Delivery',
  'Ice Delivered On Time',
]

const HowItWorks = () => {
  const theme = useTheme()

  return (
    <Section title="How It Works" id="how-it-works">
      <Box sx={{ mt: 6 }}>
        <Timeline position="alternate">
          {steps.map((label, index) => (
            <TimelineItem key={label}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: theme.palette.primary.main,
                  }}
                />
                {index < steps.length - 1 && (
                  <TimelineConnector
                    sx={{
                      bgcolor: theme.palette.primary.main,
                    }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <Typography fontWeight={500}>
                  {label}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Box>
    </Section>
  )
}

export default HowItWorks
