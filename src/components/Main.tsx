import { Box } from '@mui/material'
import Hero from './Sections/HeroSlides'
import OurProducts from './Sections/OurProducts'
import PerfectFor from './Sections/PerfectFor'
import HowItWorks from './Sections/HowItWorks'
import GetInTouch from './Sections/GetInTouch'
import DeliveryAreas from './Sections/DeliveryAreas'

const Main = () => {
  return (
    <Box component="main" sx={{ height: '100%', flex: 1 }}>
      <Box marginBlockStart={-15}>
          <Hero />
      </Box>
      <OurProducts />
      <PerfectFor />
      <HowItWorks />
      <DeliveryAreas />
      <GetInTouch />
    </Box>
  )
}

export default Main
