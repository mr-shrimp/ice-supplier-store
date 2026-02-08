import { Box, Typography, Button, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import BaseCarousel from "../Carousel/BaseCarousel"
import { fetchHeroSlides } from "../../utils/fetchHeroSlides"
import type { HeroSlide } from "../../types/HeroSlide"

const Hero = () => {
    const [slides, setSlides] = useState<HeroSlide[]>([])

    useEffect(() => {
        fetchHeroSlides()
            .then(setSlides)
            .catch(console.error)
    }, [])

    if (!slides.length) return null

    return (
        <Box component="section" id="section-hero" sx={{ width: "100%" }}>
            <BaseCarousel>
                {slides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: { xs: "50vh", md: "60vh", lg: "70vh" },
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            display: "flex",
                            alignItems: { xs: "flex-end", md: "center" },
                        }}
                    >
                        {/* Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
                            }}
                        />

                        {/* Content */}
                        <Stack
                            spacing={2}
                            sx={{
                                position: "relative",
                                color: "#fff",
                                width: "100%",
                                maxWidth: 600,
                                px: { xs: 3, md: 8 },
                                pb: { xs: 6, md: 0 },
                            }}
                        >
                            <Typography
                                fontWeight={600}
                                sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
                            >
                                {slide.title}
                            </Typography>

                            <Typography
                                sx={{ fontSize: { xs: "1rem", md: "1.25rem" } }}
                            >
                                {slide.subtitle}
                            </Typography>

                            {slide.cta && (
                                <Button
                                    variant="contained"
                                    size="medium"
                                    sx={{ width: "fit-content" }}
                                >
                                    {slide.cta}
                                </Button>
                            )}
                        </Stack>
                    </Box>
                ))}
            </BaseCarousel>
        </Box>
    )
}

export default Hero
