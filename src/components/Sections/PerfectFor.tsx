import { useEffect, useState } from "react"
import { Typography } from "@mui/material"
import Section from "../Section"
import CustomPaper from "../CustomPaper"
import ResponsiveCarousel from "../ResponsiveCarousel"
import { fetchUseCases } from "../../utils/fetchUseCases"
import type { UseCase } from "../../types/UseCase"

const PerfectFor = () => {
  const [items, setItems] = useState<UseCase[]>([])

  useEffect(() => {
    fetchUseCases()
      .then(setItems)
      .catch(console.error)
  }, [])

  if (!items.length) return null

  return (
    <Section title="Perfect For" id="section-perfect-for">
      <ResponsiveCarousel
        items={items}
        renderItem={(item) => (
          <CustomPaper
            title={item.title}
            description={item.description}
            icon={
              <Typography
                component="span"
                sx={{
                  fontSize: 36,
                  lineHeight: 1,
                }}
              >
                {item.icon}
              </Typography>
            }
          />
        )}
      />
    </Section>
  )
}

export default PerfectFor
