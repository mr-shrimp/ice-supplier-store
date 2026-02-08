import { useEffect, useState } from "react"
import Section from "../Section"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { fetchDeliveryAreas } from "../../utils/fetchDeliveryAreas"
import { fetchSiteSettings } from "../../utils/fetchSiteSettings"
import type { DeliveryArea } from "../../types/DeliveryArea"
import type { SiteSettings } from "../../types/SiteSettings"

const DeliveryAreas = () => {
  const [areas, setAreas] = useState<DeliveryArea[]>([])
  const [settings, setSettings] = useState<SiteSettings | null>(null)

  useEffect(() => {
    Promise.all([
      fetchDeliveryAreas(),
      fetchSiteSettings(),
    ])
      .then(([areasData, settingsData]) => {
        setAreas(areasData)
        setSettings(settingsData)
      })
      .catch(console.error)
  }, [])

  if (!areas.length) return null

  return (
    <Section title="Delivery Areas" id="section-delivery-areas">
      <Stack spacing={2} mt={3}>
        {areas.map((area) => (
          <Accordion
            key={area.city}
            elevation={0}
            defaultExpanded={area.city === "Vanderbijlpark"}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight={600}>
                {area.city}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Stack direction="row" flexWrap="wrap" gap={1}>
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

        {settings?.deliveryDisclaimer && (
          <Box mt={2}>
            <Typography
              variant="body2"
              fontStyle="italic"
            >
              {settings.deliveryDisclaimer}
            </Typography>
          </Box>
        )}
      </Stack>
    </Section>
  )
}

export default DeliveryAreas
