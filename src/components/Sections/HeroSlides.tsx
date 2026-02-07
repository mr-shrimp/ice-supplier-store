import { Box, Typography, Button, Stack } from '@mui/material'
import BaseCarousel from '../Carousel/BaseCarousel'

const heroSlides = [
    {
        title: 'Crystal Clear Ice',
        subtitle: 'Perfect for events, parties & businesses',
        image: '/hero-slides/hero-slide-1.png',
    },
    {
        title: 'Bulk & Bagged Ice',
        subtitle: 'From small orders to large scale supply',
        image: '/hero-slides/hero-slide-2.png',
    },
    {
        title: 'Delivered Cold. Always Reliable.',
        subtitle: "From events to everyday needs - we've got you covered",
        image: '/hero-slides/hero-slide-3.png',
        cta: "View Delivery Areas",
    }
    ,
    {
        title: 'Premium Ice for Restaurants & Bars',
        subtitle: 'Consistent quality for your beverage service',
        image: '/hero-slides/hero-slide-4.png',
    }
    ,
    {
        title: 'Ice for Braais',
        subtitle: 'Keep your drinks ice cold during the perfect braai',
        image: '/hero-slides/hero-slide-5.png',
    }
]

const Hero = () => {
    return (
        <Box component="section" id="section-hero" sx={{ width: '100%' }}>
            <BaseCarousel>
                {heroSlides.map((slide, index) => (
                    <Box
                        key={index}
                        sx={{
                            height: { xs: '50vh', md: '60vh', lg: '70vh' },
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative',
                            display: 'flex',
                            alignItems: { xs: 'flex-end', md: 'center' },
                        }}
                    >
                        {/* Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: 0,
                                background:
                                    'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
                            }}
                        />

                        {/* Content */}
                        <Stack
                            spacing={2}
                            sx={{
                                position: 'relative',
                                color: '#fff',
                                width: '100%',
                                maxWidth: 600,
                                px: { xs: 3, md: 8 },
                                pb: { xs: 6, md: 0 },
                            }}
                        >
                            <Typography
                                variant="body1"
                                fontWeight={600}
                                sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
                            >
                                {slide.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                            >
                                {slide.subtitle}
                            </Typography>
                            {slide.cta && (
                                <Button
                                    variant="contained"
                                    size="medium"
                                    sx={{ width: 'fit-content' }}
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
