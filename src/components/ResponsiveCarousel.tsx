import React, { useState } from 'react'
import {
  Box,
  Stack,
  useMediaQuery,
  useTheme,
  MobileStepper,
  IconButton
} from '@mui/material'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

interface ResponsiveCarouselProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  breakpoint?: 'xs' | 'sm' | 'md'
  maxItemWidth?: number
  autoPlayInterval?: number
}

const ResponsiveCarousel = <T,>({
  items,
  renderItem,
  breakpoint = 'sm',
  maxItemWidth = 320,
  autoPlayInterval = 4000,
}: ResponsiveCarouselProps<T>) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(breakpoint))
  const [activeStep, setActiveStep] = useState(0)

  const maxSteps = items.length

  return isMobile ? (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={setActiveStep}
        enableMouseEvents
        interval={autoPlayInterval}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            px={2}
            maxWidth={maxItemWidth}
            mx="auto"
            mb={2}
          >
            {renderItem(item, index)}
          </Box>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx={{
          background: "transparent",
          justifyContent: "space-between",
        }}
        nextButton={
          <IconButton
            size="small"
            onClick={() => setActiveStep((prev) => Math.min(prev + 1, maxSteps - 1))}
            disabled={activeStep === maxSteps - 1}
          >
            <KeyboardArrowRight />
          </IconButton>
        }
        backButton={
          <IconButton
            size="small"
            onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
          </IconButton>
        }
      />
    </Box>
  ) : (
    <Stack
      direction="row"
      justifyContent="center"
      gap={3}
      flexWrap="wrap"
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            backdropFilter: "blur(8px)",
            background: "rgba(255,255,255,0.15)",
            borderRadius: 3,
          }}
        >
          {renderItem(item, index)}
        </Box>
      ))}
    </Stack>
  )
}

export default ResponsiveCarousel
