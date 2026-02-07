import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

interface BaseCarouselProps {
  children: React.ReactNode[]
  autoPlayInterval?: number
  showControls?: boolean
  onIndexChange?: (index: number) => void
}

const BaseCarousel = ({
  children,
  autoPlayInterval = 5000,
  onIndexChange,
}: BaseCarouselProps) => {
  const [index, setIndex] = useState(0)

  const handleChange = (i: number) => {
    setIndex(i)
    onIndexChange?.(i)
  }

  return (
    <AutoPlaySwipeableViews
      index={index}
      onChangeIndex={handleChange}
      enableMouseEvents
      interval={autoPlayInterval}
    >
      {children}
    </AutoPlaySwipeableViews>
  )
}

export default BaseCarousel
