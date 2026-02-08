import { useEffect, useState } from "react"
import Section from "../Section"
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab"
import { Box, Typography, useTheme } from "@mui/material"
import { fetchHowItWorks } from "../../utils/fetchHowItWorks"
import type { HowItWorksStep } from "../../types/HowItWorksStep"

const HowItWorks = () => {
  const theme = useTheme()
  const [steps, setSteps] = useState<HowItWorksStep[]>([])

  useEffect(() => {
    fetchHowItWorks()
      .then(setSteps)
      .catch(console.error)
  }, [])

  if (!steps.length) return null

  return (
    <Section title="How It Works" id="section-how-it-works">
      <Box sx={{ mt: 6 }}>
        <Timeline position="alternate">
          {steps.map((step, index) => (
            <TimelineItem key={step.order}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{ bgcolor: theme.palette.primary.main }}
                />
                {index < steps.length - 1 && (
                  <TimelineConnector
                    sx={{ bgcolor: theme.palette.primary.main }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <Typography fontWeight={500}>
                  {step.description}
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
