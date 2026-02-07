import Section from '../Section'
import deliveryData from '../../../public/delivery-areas.json'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
  Stack,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const DeliveryAreas = () => {
  return (
    <Section title="Delivery Areas" id="section-delivery-areas">
      <Stack spacing={2} mt={3}>
        {deliveryData.deliveryAreas.map((area, index) => (
          <Accordion
            key={index}
            elevation={0}
            defaultExpanded={area.city === 'Vanderbijlpark'}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                {area.city}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1}
              >
                {area.suburbs.map((suburb) => (
                  <Chip
                    key={suburb}
                    label={suburb}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Stack>

              {area.note && (
                <Typography
                  variant="caption"
                  display="block"
                  mt={1.5}
                  color="text.secondary"
                >
                  {area.note}
                </Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}

        <Box mt={2}>
          <Typography
            variant="body2"
            fontStyle="italic"
          >
            {deliveryData.disclaimer}
          </Typography>
        </Box>
      </Stack>
    </Section>
  )
}

export default DeliveryAreas
